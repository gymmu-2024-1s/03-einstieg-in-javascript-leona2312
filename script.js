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

    const upperCaseLetter = currentElement.toUpperCase() //gibt die Eingabe als Grossbuchstaben zurück

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
  return count //gibt den Wert zurück
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  //Man filtert die Eingabe so, dass nur noch Buchstaben und Leerzeichen übrig
  //bleiben
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      //Grossbuchstabe
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      // Kleinbuchstabe
      result.push(currentElement)
    } else if (ascii === 32) {
      // Leerzeichen
      result.push(currentElement)
    }
  }

  //Jetzt kann man noch mehrere Leerzeichen am Stück haben, die muss man
  //noch filtern

  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      //hier sind 2 Leerzeichen hintereinadner , deshalb ignoriere das erste
    } else {
      result2.push(currentElement)
    }
  }
  //Jetzt kann man die Leerzeichen zählen
  let count = 0
  for (let i = 0; i < result.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count = count + 1
    }
  }
  //Da es ein Wort mehr wie Leerzeichen gibt, gibt man Leerzeichen+1 zurück
  return count + 1
}

linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  return /[A-Z]/.test(args) //üperfrüft, ob mindestens ein Großbuchstabe vorhanden ist. (return-Anweisung beendet eine Funktion und gibt den Wert zurück)
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []
  let hasSonderzeichen = false //kommt ein Sonderzeichen vor?
  // Schreibe eine Funktion, die testet ob ein Sonderzeichen vorkommt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 33 && ascii <= 47) {
      hasSonderzeichen = true
    }
  }
  return hasSonderzeichen
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []
  //Sollte das Wort 'und' erkennen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "u") {
      //Wenn der Buchstabe genau das ist, was wir eingegeben haben, geht es weiter.
      if (input[i + 1] === "n") {
        //man schaut, ob direkt die nächste Eingabe kommt. hier also ob n kommt.
        if (input[i + 2] === "d") {
          //zwei Stellen nach der ersten Eingabe schaut man, ob d kommt.
          return true
        }
      }
    }
  }
  return false
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      //Element, um welches sich handelt, also e.
      result.push(3) // e durch 3 ersetzen.
    } else {
      result.push(currentElement) //hängt das e an das Ende der Liste dran
    }
  }
  return result.join("") //macht aus der Liste einen String
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

  for (let i = 0; i < input.length; i++) {
    //Teste, ob die Eingabe ein korrekter RGB Hexcode ist.
    if (input[i] === "#") {
      //Testet, ob die Eingabe ein "#" ist.
      return true //gibt richtig an
    } else {
      return false //gibt falsch an
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args

  //Erstelle eine Variable um den ASCII-Code zu speichern.
  let asciiCode = 0

  //Speichere den ASCII-Code vom ersten Zeichen
  asciiCode = input.charCodeAt(0) //Gibt den UniCode-Wert des Zeichens an einer bestimmten Position in einem String zurück. Was ist ein Unicode-Wert und String? --> Ein Unicode-Wert ist eine Zahl, die ein bestimmtes Zeichen eindeutig  identifiziert, unabhänhig davon, wo es sich in einem String befindet (Nicht die Reihenfolge der Zeichen in einem Srtring, sondern den Code des einzelnen Zeichens selbst.) Ein String ist eine Zeichenkette in Anführungszeichen.

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
      return i //wenn e gefunden wird bricht es ab und es wird nicht mehr ausgeführt.
    }
  }
  return -1 // -1 zeigt an, dass es nicht in der Liste steht.
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  let lastIndex = -1 //setzt die Variable lastIndex auf -1, um anzuzeigen, dass noch kein gültiger Index gefunden wurde. lastIndex speichert den Index von dem letztem Element.

  for (let i = 0; i < input.length; i++) {
    // suche die Position des letzten e's
    const currentElement = input[i]

    if (currentElement === "e") {
      lastIndex = i
    } //Der Code speichert den Index i in lastIndex, wenn das aktuelle Element "e" ist.
  }
  return lastIndex //gibt den Index zurück
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
  return -1 //return -1 wird angezeigt, wenn weniger als 3 "e"'s da sind.
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
    } //stoppt wenn es '$' ist
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totallist = []
  const currentlist = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Wenn man auf ein Leerzeichen trifft, dann schreibt man alles was man bisher gemacht hat in die Liste
    // in die totallist

    if (currentElement === " ") {
      totallist.push(currentlist.join(""))
      currentlist.length = 0
    } else {
      currentlist.push(currentElement)
    }
  }
  //Alles in die Liste schreiben was man bis am ende gelesen hat.
  totallist.push(currentlist.join("")) //macht einen Text und fügt den dann zu der totalliste hinzu.
  return totallist //wird als Text zurueckgegeben
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args

  // Man kann die Aufgabe 17 verwenden um eine Liste zu bekommen.
  const nameAndAge = aufgabe17(input)

  // Man generiert unsere Ausgabeliste
  const result = []

  // Hier schreibt man ganze Worte in die Liste, auch das ist möglich
  result.push("Sie heissen Leona")

  // Man setzt die Liste dann so zusammen, dass der Name und das Alter an der
  // richtigen Stelle eingefügt werden.
  result.push(nameAndAge[0])
  result.push(" und sind 16")
  result.push(nameAndAge[1])
  result.push(" Jahre alt.") //wird als Text zurückgegeben (alle beide)

  // Das Resultat immer als Text zurückgeben
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18] ", aufgabe18)

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
    result.push(currentElement) //gleiches Element wird doppelt hinzugefügt
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  let allGood = true //die Eingabe ist richtig

  //prüfe ob nach jeden "." ein Leerschlag kommt.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      //prüfe ob das nächste Zeichen ein Leerschlag ist.
      if (input[i + 1] === " ") {
        //Die Eingabe ist ein Leerschlag und eine Stelle danach (+1) kommt ein Punkt.
        //do nothing
      } else {
        allGood = false //sonst ist es falsch.
      }
    }
  }
  return allGood
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  //kehre die Eingabe um
  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    result.push(currentElement)
  } //es wird rückwärts geprüft und das Ergebnis wird in result geschrieben

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []

  for (const currentElement of args) {
    //geht durch die Eingabe{
    if (currentElement === "") {
      result.push("_") //Ein Leerzeichen wird durch einen _ ersetzt
    } else if (currentElement === "") {
      // do nothing
    } else {
      result.push(currentElement) //Behaltet alle anderen Eingaben
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = [] //Leere Liste, in der wir das Resultat anhängen
  const firstelement = input[0] //0 ist das erste Zeichen und wird nicht mehr geändert

  // Hänge firstelement an die Liste an
  result.push(firstelement)

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] //nimmt das Zeichen an der Stelle i
    result.push(currentElement) //hängt das Zeichen an die Liste an
  }

  result.push(firstelement) //nimmt das erste Zeichen und hängt es am Ende an

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  // Vertausche das erste und das letzte Zeichen
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[input.length - 1]) //nimmt das letzte Zeichen und hängt es an, also ganz vorne
    } else if (i === input.length - 1) {
      result.push(input[0]) //wenn man am Ende ist, nimmt man das erste Zeichen und macht es ganz hinten
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []
  //Lösche das Zeichen welches in der Mitte des Textes steht

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === Math.floor(input.length / 2)) {
      //der mittlere Wert wird einfach übersprungen
      // do nothing
    } else {
      result.push(currentElement) //die anderen Zeichen werden zu result hinzugefügt
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []
  // Vergleiche und vertausche das erste und das zweite Zeichen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[1]) //wenn i 0 ist, dann wird einfach das zweite Zeichen hinzugefügt.
    } else if (i === 1) {
      result.push(input[0]) //wenn i 1 ist, dann wird einfach das erste Zeichen hinzugefügt.
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  const result = []
  //sollte testen ob die Eingabe eine Zahl ist
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement >= "0" && currentElement <= "9") {
      //man prüft, ob das Zeichen eine Zahl ist
      result.push(currentElement)
    }
  }
  //sollte testen ob die Eingabe keine Zahl ist
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement < "0" || currentElement > "9") {
      //man prüft, ob das Zeichen keine Zahl ist
      return false //dann ist es falsch
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args
  let num1, num2

  // Suche nach den ersten beiden Zahlen im Array
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (!isNaN(currentElement)) {
      // isNaN() prüft, ob das Element eine Zahl ist
      // Überprüfe, ob das Element keine Zahl ist. durch das ! prüft es, OB es eine Zahl ist
      if (!num1) {
        num1 = parseInt(currentElement) //num1 speichert die erste Zahl, die man findet
      } else if (!num2) {
        num2 = parseInt(currentElement) //speichert die zweite Zahl, die man findet
        break //es wird abgebrochen
      }
    }
  }

  // Wenn zwei Zahlen gefunden wurden, addiere sie
  if (num1 !== undefined && num2 !== undefined) {
    //prüft, ob num1 und num2 beides Zahlen sind oder nicht
    return num1 + num2 //die Summe der Zahlen von num1 und num2 wird zurückgegeben
  } else {
    return "Keine zwei Zahlen gefunden" //wenn es keine Zahlen hat, wird "Keine zwei Zahlen gefunden" ausgegeben
  }
}

linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

export function EigeneAufgabe(args) {
  const input = args
  const result = []

  //Übersetze den Text in Ascii und +2
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0) //Der Ascii Wert des Zeichens wird gelesen und in ascii gespeichert
    const code = ascii + 2 //Der Wert von Ascii wird mit 2 addiert oder halt +2 erhöht
    const letter = String.fromCharCode(code) //mit diesen String wird der neue Wert für Ascii gegeben
    result.push(letter) //das neue Zeichen wird hinzugefügt
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=EigeneAufgabe]", EigeneAufgabe)

export function EigeneAufgabe2(input) {
  let summe = 0 //speichert die Summe der Zahlen
  let currentZahl = "" //speichert die aktuelle Zahl

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (
      currentElement.charCodeAt(0) >= 48 &&
      currentElement.charCodeAt(0) <= 57
    ) {
      //schaut, ob das Zeichen eine Zahl ist{
      currentZahl += currentElement //falls es eine Ziffer ist, dann wird es zu currentZahl hinzugefügt, damit die Zahlen zusammengefasst werden
    } else if (currentZahl !== "") {
      //wenn ein Zeichen keine Zahl ist und currentZahl nicht leer ist, dann wird die Zahl die bis jetzt gefunden wurdezu summe hinzugefügt

      summe += parseInt(currentZahl) //die Zahl wird zusammengeasst (zusammengenommen) und in summe gespeichert
      currentZahl = "" //Alles wird wieder leer gemacht, damit eine neue Zahl gespeichert werden kann
    }
  }

  if (currentZahl !== "") {
    //wenn eine Zahl übrig geblieben ist, wird sie auch zur Summe hinzugefügt
    summe += parseInt(currentZahl) //wird addiert
  }

  return summe //die Summe wird zurückgegeben
}
linkupExerciseHandler("[data-click=EigeneAufgabe2]", EigeneAufgabe2)

export function Bubblesort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")

  return result
}
linkupExerciseHandler("[data-click=Bubblesort]", Bubblesort)

export function Selectionsort(args) {
  const input = args.split("")
  const result = []
  let n = input.length
  for (let i = 0; i < n - 1; i++) {
    // Assume the current position holds
    // the minimum element
    let min_idx = i

    // Iterate through the unsorted portion
    // to find the actual minimum
    for (let j = i + 1; j < n; j++) {
      if (input[j] < input[min_idx]) {
        // Update min_idx if a smaller element is found
        min_idx = j
      }
    }

    // Move minimum element to its
    // correct position
    let temp = input[i]
    input[i] = input[min_idx]
    input[min_idx] = temp
  }
  return input
}

linkupExerciseHandler("[data-click=Selectionsort]", Selectionsort)

export function Bucketsort(args) {
  const text = args
  const list = text.split("") // Wandelt den Text in eine Liste um

  // 256 Buckets für alle ASCII-Zeichen (von 0 bis 255)
  let buckets = new Array(256).fill().map(() => [])

  // Elemente in die Buckets verteilen
  for (let i = 0; i < list.length; i++) {
    let index = list[i].charCodeAt(0) // Die ASCII-Werte der Zeichen
    buckets[index].push(list[i])
  }

  // Eimer sortieren und zusammenführen
  return buckets
    .map((bucket) => bucket.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))) // Sortiere jedes Bucket
    .flat() // Alle sortierten Buckets werden flach zusammengeführt
    .join("") // Als String zusammenfügen
}

linkupExerciseHandler("[data-click=Bucketsort]", Bucketsort)
