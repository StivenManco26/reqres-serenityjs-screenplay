import { Duration, Task, Wait } from "@serenity-js/core";
import { GoogleTranslatePage } from "../../main/ui/GoogleTranslatePage.ts";
import { Ensure, equals } from '@serenity-js/assertions'
import { isVisible } from "@serenity-js/web";


export class visualizarEnEl {
    public static traductor = (palabraTraducida: string) =>
        Task.where(`#actor visualiza la palabra traducida ${palabraTraducida}`,
            Wait.upTo(Duration.ofSeconds(5)).until(GoogleTranslatePage.palabraTraducidaLabel(), isVisible()),
            Ensure.that(GoogleTranslatePage.palabraTraducidaLabel().text(), equals(palabraTraducida))
        )
}