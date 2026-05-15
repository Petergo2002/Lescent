# Turn On

Den här filen beskriver hur vi slår på sajten igen efter det tillfälliga underhållsläget.

## Gör så här

1. Öppna `lib/site-status.ts`.
2. Ändra `MAINTENANCE_MODE = true` till `MAINTENANCE_MODE = false`.
3. Spara filen.
4. Bygg och deploya sidan igen om produktion inte uppdateras automatiskt.

## Fil att ändra

- `lib/site-status.ts`

## Vad som händer

När `MAINTENANCE_MODE` sätts till `false`:

- underhållssidan slutar visas
- vanliga sidor blir tillgängliga igen
- köpknappar och checkout fungerar igen

## Kontroll efteråt

Kontrollera detta efter att sidan slagits på:

1. Startsidan laddar normalt.
2. Produktsidor går att öppna.
3. Det går att lägga en produkt i varukorgen.
4. Knappen till kassan fungerar igen.
