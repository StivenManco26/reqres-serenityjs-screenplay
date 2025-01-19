import { Check, Duration, Task, Wait } from "@serenity-js/core";
import { Click, Enter, isVisible } from "@serenity-js/web";
import { GoogleTranslatePage } from "../../main/ui/GoogleTranslatePage.ts";
import { equals } from "@serenity-js/assertions";

export class IngresarEnElTraductor {
    public static laPalabra = (palabra: string) =>
        Task.where(`#actor ingresa la palabra ${palabra} en el cuadro de texto`,
            Enter.theValue(palabra).into(GoogleTranslatePage.textArea()),
            Wait.upTo(Duration.ofSeconds(5)).until(GoogleTranslatePage.idiomaDestinoInglesButton(), isVisible()),
            Check.whether(GoogleTranslatePage.idiomaDestinoSpan().text(), equals("inglés"))
            .andIfSo(
                Click.on(GoogleTranslatePage.idiomaDestinoInglesButton())
            ) 
        )
}
