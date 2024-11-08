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

export function aufgabe11(args) {
  const input = args

  //Erstelle eine Variable um den ASCII-Code zu speichern.
  let asciiCode = 0

  //Speichere den ASCII-Code vom ersten Zeichen
  asciiCode = input.charCodeAt(0) //Gibt den Unicode-Wert des Zeichens an einer bestimmten Position in einem String zurück. Was ist ein Unicode-Wert und String? --> Ein Unicode-Wert ist eine Zahl, die ein bestimmtes Zeichen eindeutig  identifiziert, unabhänhig davon, wo es sich in einem String befindet (Nicht die Reihenfolge der Zeichen in einem Srtring, sondern den Code des einzelnen Zeichens selbst.) Ein String ist eine Zeichenkette in Anführungszeichen.

  //Sollte 'null' zurückgeben wenn mehr wie ein Zeichen gegeben sind.
  if (input.length > 1) {
    return null

    //Sollte 'null' zurückgeben wenn keine Eingbe gegeben ist.
  } else if (input.length === 0) {
    return null //--> Der Code gibt null zurück, wenn input mehr als ein      Zeichen oder Element enthält.
  }
  return asciiCode
}

linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Suche die Position des ersten e's
    if (currentElement === "e") {
      return i // er springt aus der Funktion raus, wenn e gefunden wird bricht es ab und es wird nicht mehr ausgeführt.
    }
  }
  return -1 // -1 zeigt an, dass es nicht in der Liste steht.
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  let lastIndex = -1 //setzt die Variable lastIndex auf -1, um anzuzeigen, dass noch kein gültiger Index gefunden wurde. lastIndex ist eine Variable, die normalerweise den Index des zuletzt gefundenen Elements speichert.

  for (let i = 0; i < input.length; i++) {
    // suche die Position des letzten e's
    const currentElement = input[i]

    if (currentElement === "e") {
      lastIndex = i
    } //Der Code speichert den Index i in lastIndex, wenn das aktuelle Element "e" ist.
  }
  return lastIndex
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  let count = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
      count++
      if (count === 3) {
        return i
      }
    } //Der Code sucht nach dem dritten "e" in einem Text und gibt den Index zurück, an dem es gefunden wird. Sobald das dritte "e" gefunden ist, stoppt der Code. Der Index ist einfach die Zahl, die die Position eines Zeichens im Text angibt, beginnend bei 0.
  }
  return -1 // return -1 if there are less than three 'e's
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []

  // Read the input only up to the first space
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      break
    } //Der Code beendet die Schleife, wenn currentElement ein Leerzeichen ist. currentElement ist eine Variable, die das aktuelle Element in einer Schleife darstellt. Eine Schleife wiederholt einen Codeblock, solange eine Bedingung erfüllt ist.
    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []

  //Lesen Sie die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste ein, und den Rest als den zweiten Teil
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      break
    }
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe19(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Sollte 'aa' heissen.
    if (currentElement === "aa") {
      result.push("aa")
    }
  }
  // jedes Zeichen sollte verdoppelt werden
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe(args) {
  const input = args
  const result = []

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)
