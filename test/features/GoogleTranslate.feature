Feature: Google Translate

    Scenario Outline: Traducir palabra de español a ingles
        Given Cesar se encuentra en la web de Google Translate
        When ingresa la palabra "<palabraOriginal>" para ser traducida
        Then debe visualizar su traducción correspondiente "<palabraTraducida>"
        
        Examples:
            | palabraOriginal | palabraTraducida |
            | Queso           | Cheese           |
            | Perro           | Dog              |
            | Gato            | Cat              |