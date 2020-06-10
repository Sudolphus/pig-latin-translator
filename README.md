# _Pig Latin Translator_

#### _An application to translate sentences into Pig Latin, 6.10.2020_

#### By _**Micheal Hansen and Evgeniya Chernaya**_

## Description

_This application will take in a sentence, then return that sentence translated into pig latin._

## Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program Gathers User Input** | User input: "pants" | Output: "pants" |
| **Program Ignores Non-Alphabetical Input** | User Input: "5%" | Output: "5%" |
| **Program Ignores Case** | User Input: "ApPlE" | Output: "ApPlE" |
| **Program Adds "way" To Single-letter Vowel Words** | User input: "i" | Output: "iway" |
| **Program Adds "ay" To Single-letter Consonants** | Input: "J" | Output: "Jay" |
| **Program treats "y" as a Consonant** | Input: "Y" | Output: "Yay" |
| **Program Adds "way" to Multiple-letter words that start with a vowel** | Input: "Apple" | Output: "Appleway" |
| **Program Moves Starting Letter to End and Adds "ay" for words that start with a consonant** | Input: "Target" | Output: "argetTay" |
| **Program Moves Starting Consonant Block to End and adds "ay" for words that start with multiple consonants** | Input: "Shop" | Output: "opShay" |
| **Program Moves Following "u" if Word Starts With "q"** | Input: "queue" | Output: "euequay" |
| **Program Moves Following "u" if Consonants Block includes "q"** | Input: "squirrel" | Output: "irrelsquay" |
| **Program Applies Above Rules For Multiple-word Sentences** | Input: "The cat meows" | Output: "eThay atcay eowsmay" |

## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/Sudolphus/pig-latin-translator.git`
2. Navigate into the `pig-latin-translator` directory in Visual Studio Code or preferred text editor
`code .`
3. Open index.html in Chrome or preferred browser:
`open index.html`

#### To see my live website go to https://sudolphus.github.io/pig-latin-translator!


## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_Please reach out through my GitHub account._

## Technologies Used

* _HTML_
* _CSS (including Bootstrap)_
* _JavaScript (including jQuery)_
* _VSCode_

### License

MIT License.

Copyright (c) 2020 **_Micheal Hansen and Evgeniya Chernaya_**
