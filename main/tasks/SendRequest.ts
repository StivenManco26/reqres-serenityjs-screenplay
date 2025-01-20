import { Task } from "@serenity-js/core";
import { DeleteRequest, GetRequest, PostRequest, PutRequest, Send } from "@serenity-js/rest";
import { Endpoints } from "main/utils/settings/Endpoints.ts";

export class SendRequest {
  public static readonly forCreateUserReqresApi = (name: string, job: string) =>
    Task.where(
      `#actor send request for create user with ${name} ${job}`,
      Send.a(
        PostRequest.to(Endpoints.ENDPOINT_CREATE_USER).with({
          name: name,
          job: job,
        })
      )
    );

  public static readonly forQueryUserReqresApi = (id: string) =>
    Task.where(
      `#actor send request for query user with id ${id}`,
      Send.a(GetRequest.to(Endpoints.ENDPOINT_CREATE_USER + id))
    );

  public static readonly forUpdateUserReqresApi = (id: string, name: string, job: string) =>
    Task.where(
      `#actor send request for update user with id ${id} new name ${name} new job ${job}`,
      Send.a(
        PutRequest.to(Endpoints.ENDPOINT_CREATE_USER + id).with({
          name: name,
          job: job
        })
      )
    );

    public static readonly forDeleteUserReqresApi = (id: string) =>
    Task.where(
      `#actor send request for delete user with id ${id}`,
      Send.a(DeleteRequest.to(Endpoints.ENDPOINT_CREATE_USER + id))
    );
}
