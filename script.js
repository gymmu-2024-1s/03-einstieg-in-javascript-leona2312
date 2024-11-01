import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      // nichts machen
    } else {
      result.push(currentElement)
    }
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = [] // Das ist die Resultatliste.
  // Läuft Zeichen für Zeichen über den ganzen Text.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const upperCaseLetter = currentElement.toUpperCase()

    // Hänge das aktuelle Zeichen doppelt an.
    result.push(upperCaseLetter)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)
export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0 // count am Anfang 0, wir starten dort.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1 //Zählt alle "e", Schlaufe und wiederholt sich.
    } else if (currentElement === "E") {
      count++ // Kurzform von count = count + 1, grosse "E" zählen, Schlaufe.
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  //erstes Wort um getestet zu werden, function Funktion, Parameter, dass man in die Funktion eingeben kann.
  const input = args
  const result = []
  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    //for ist um es zu prüfen.
    const currentElement = input[i]
    const upperCaseVersion = currentElement.toUpperCase()
    if (currentElement === ".") {
      //mache nichts.
    } else if (currentElement === upperCaseVersion) {
      hasUpperCaseLetter = true
    } //sonst...
  }

  return hasUpperCaseLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      //Element, um welches sich handelt.
      // do nothing
      result.push(3) // e durch 3 ersetzen.
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args //Speichert den Wert von args in der Variable input. damit wird für uns klarer, was wir gerade bearbeiten.

  let is6long = false //zählt, ob der Text 6 Zeichen lang ist oder nicht.
  let count = 0 //lässt den Anfang bei 0 starten.

  for (let i = 0; i < input.length; i++) {
    //"i" ersetzt 0. dann wird die Kurzform angewendet.
    const currentElement = input[i] // "currentElement", damit es explizit ist womit wir arbeiten und damit wir nicht so viele Klammern schreiben müssen.
    count = count + 1
  }

  if (count === 6) {
    is6long = true //bestimmt, ob die Zeichenanzahl dieser Anzahl entspricht.
  }

  return is6long
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe12(args) {
  const input = args
  const result = []

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)
