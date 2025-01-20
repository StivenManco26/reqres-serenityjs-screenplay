import { Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import {
  Log,
  Notepad,
  TakeNotes,
  actorCalled,
  actorInTheSpotlight,
  notes,
} from "@serenity-js/core";
import { CallAnApi, LastResponse } from "@serenity-js/rest";
import { Ensure, equals } from "@serenity-js/assertions";

import { IdUser } from "main/models/interfaces/IdUser.ts";
import { SendRequest } from "main/tasks/SendRequest.ts";
import { BaseUrls } from "main/utils/settings/BaseUrls.ts";
import { UserCreateInterface } from "main/models/interfaces/UserCreateInterface.ts";
import { GetUserInterface } from "main/models/interfaces/GetUserInterface.ts";
import { UserUpdateInterface } from "main/models/interfaces/UserUpdateInterface.ts";

setDefaultTimeout(60 * 1000);

When(
  "I create a new user with {string} {string}",
  async (name: string, job: string) => {
    return await actorCalled("API Client")
      .whoCan(
        TakeNotes.using(Notepad.empty<IdUser>()),
        CallAnApi.at(BaseUrls.BASE_URL_REQRES)
      )
      .attemptsTo(SendRequest.forCreateUserReqresApi(name, job));
  }
);

Then(
  "the response should have status code {int}",
  async (statusCode: number) => {
    return await actorInTheSpotlight().attemptsTo(
      Ensure.that(LastResponse.status(), equals(statusCode))
    );
  }
);

Then("the response should contain the created user ID", async () => {
  return await actorInTheSpotlight().attemptsTo(
    Log.the(LastResponse.body<UserCreateInterface>()),
    notes<IdUser>().set("idUser", LastResponse.body<UserCreateInterface>().id)
  );
});

When("I request the user details using the ID {int}", async (id: number) => {
  return await actorCalled("API Client")
    .whoCan(CallAnApi.at(BaseUrls.BASE_URL_REQRES))
    .attemptsTo(SendRequest.forQueryUserReqresApi(id.toString()));
});

Then("the user data should be correct", async () => {
  return await actorInTheSpotlight().attemptsTo(
    Ensure.that(
      LastResponse.body<GetUserInterface>(),
      equals({
        data: {
          id: 2,
          email: "janet.weaver@reqres.in",
          first_name: "Janet",
          last_name: "Weaver",
          avatar: "https://reqres.in/img/faces/2-image.jpg",
        },
        support: {
          url: "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
          text: "Tired of writing endless social media content? Let Content Caddy generate it for you.",
        },
      })
    )
  );
});

When(
  "I update the user data using the ID {int} {string} {string}",
  async (id: number, name: string, job: string) => {
    return await actorCalled("API Client")
      .whoCan(CallAnApi.at(BaseUrls.BASE_URL_REQRES))
      .attemptsTo(SendRequest.forUpdateUserReqresApi(id.toString(), name, job));
  }
);

Then(
  "the response data should be correct {string} {string}",
  async (name: string, job: string) => {
    return await actorInTheSpotlight().attemptsTo(
      Log.the(LastResponse.body<UserUpdateInterface>()),
      Ensure.that(LastResponse.body<UserUpdateInterface>().name, equals(name)),
      Ensure.that(LastResponse.body<UserUpdateInterface>().job, equals(job))
    );
  }
);

When("I delete the user using the ID {int}", async (id: number) => {
  return await actorCalled("API Client")
    .whoCan(CallAnApi.at(BaseUrls.BASE_URL_REQRES))
    .attemptsTo(SendRequest.forDeleteUserReqresApi(id.toString()));
});
