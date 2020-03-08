(this.webpackJsonp=this.webpackJsonp||[]).push([[4],{709:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));n(19),n(5),n(3),n(1),n(13),n(14),n(22);var r=n(59),a=n(66);n(36);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/array-types.mdx"}});var c={_frontmatter:i},s=a.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(s,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"array-types"},"Array Types"),Object(r.b)("hr",null),Object(r.b)("p",null,"Array is another fundamental JavaScript data type which represents a heterogeneous collection (collection which can contain more than one data-type inside). Hegel provides syntax for annotatation array type and restricts collection element type."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"const numbers: Array<number> = [1, 2, 3];\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you are familiar with TypeScript or Flow.js, you may know about array types, but both Flow.js and TypeScript provide two ways for array definition: via Array-constructor and via adding ",Object(r.b)("inlineCode",{parentName:"p"},"[]")," (squere brackets) at the end of the type name:"),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"const oneWay: Array<number> = [1, 2, 3];\nconst anotherOne: number[] = [1, 2, 3];\n")),Object(r.b)("p",{parentName:"blockquote"},"Hegel provides only first variant without additional syntax with squere brackets.")),Object(r.b)("h2",{id:"array-constructor"},"Array Constructor"),Object(r.b)("p",null,"JavaScript has two different ways to define an array."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"const arrayLiteral = [];\nconst arrayConstructorInvocationWithLength = new Array(0);\n")),Object(r.b)("p",null,"And Hegel has a difference for this two JavaScript ways of array definition. The difference is: when you create array via ",Object(r.b)("inlineCode",{parentName:"p"},"Array"),' constructor - array will be "undefined".'),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const arrayLiteral: Array<number> = [];\narrayLiteral[0] = 4;         // 👌!\n\n// Error: Type "undefined" is incompatible with type "number"\narrayLiteral[1] = undefined;\n\nconst arrayInstance = new Array<number>(4);\narrayInstance[0] = 4;         // 👌!\narrayInstance[1] = undefined; // 👌!\n')),Object(r.b)("p",null,"The reason of this decision is behaivour of Array instance. Even if you set length of you array it will be filled with undefined, so Hegel can't give any guarantees that all your elements will have annotated type."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"TypeScript and Flow.js have not differenced for this difference array creation way, so it's easy to get runtime TypeError with this analyzers ",Object(r.b)("a",o({parentName:"p"},{href:"https://www.typescriptlang.org/v2/en/play?ts=3.8.0-beta#code/MYewdgzgLgBAhgJwXAngSUlOZgFMYC8MYuA7jAIJKoA8YArgLYBGuCAfABQAsAlANwAoQQBtcsAJZgoAZVwBHerhz4iAIjVCAZiAQxOoTMSYwQW+NXSZseXjADegmDAD0LmABUUAB1wBRJF0ALhgAYWwwEFgEXDgAExhvBBBfBCgUGAByKBAAMQkAD1w4zNNzejA43C0pYqcYKVkFJRUYAGoiBkYAOhz8orjOAAYBQQBfIA"}),"TypeScript Example"),", ",Object(r.b)("a",o({parentName:"p"},{href:"https://flow.org/try/#0PQKgBAAgZgNg9gdzCYAoAxnAdgZwC5gCGATsYQJ4CSuehW6ApmALxhYNICCpFAPFgFcAtgCMGxAHwAKACwBKANypUMBgQCWWPAGUGARwEN6TVgCJTSqHGJgpmGm2Fg4UIjyo06jOWADeqMDBgYDAAFXIABwYAUVJrAC4wAGE6LDgCYgZCABMwCOI4KOI8cjAAcjw4ADF1AA8GbLLnVwEsbIYoTQaAsE0dfUNjMABqVkEhADpKmvrsqQAGRVQAXyA"}),"Flow.js Example"),":")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"const arrayInstance = new Array<number>(4);\n\nlet intSequence = \"\";\nfor (const num of arrayInstance) {\n  // TypeError: Cannot read property 'toFixed' of undefined\n  intSequence += num.toFixed(0);\n}\n")),Object(r.b)("h2",{id:"getting-element-from-array"},"Getting element from Array"),Object(r.b)("p",null,'Another interesting Hegel "feature" is type inference for element which will be gotten from array by index syntax.'),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const numbers: Array<number> = [];\n// Type of firstElement is "number | undefined"\nconst firstElement = numbers[0];\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'If you are familiar with TypeScript or Flow.js, this "analyzers" will infer ',Object(r.b)("inlineCode",{parentName:"p"},"firstElement")," as ",Object(r.b)("inlineCode",{parentName:"p"},"number")," which can create a TypeError in runtime.\n",Object(r.b)("a",o({parentName:"p"},{href:"https://www.typescriptlang.org/v2/en/play?ts=3.8.0-beta#code/MYewdgzgLgBGCuBbARgUwE4QFwwILvQEMBPAHgRQwD4YBeGAbQF0BuAKAHoOYAVYgB1QBRAiHQ4AwoTBgQsdKkIATGP3QhB6KMRgByKCABiASwAeqJbpggAZjHhglqG8bAW2oSLBeYoQgDaoiKhgsPQUaJgMAAxMAHQGJuZKABQAlCxAA"}),"TypeScript Example"),", ",Object(r.b)("a",o({parentName:"p"},{href:"https://flow.org/try/#0PQKgBAAgZgNg9gdzCYAoVBjOA7AzgFzGwFcBbAIwFMAnXALjAEFrqBDATwB4SKaA+MAF4wAbQC6AblTBgYACrsADpQCiLONQYBhVtmxxC1SqwAmYRdTjLq+dmADk+OADEAlgA9KJ+2DhQwxNgmlFCu2F6YOARgobT4KjCUpJTYhMI8VLQiAAxiAHRObp4mABQAlFJAA"}),"Flow.js example"),".")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"const numbers: Array<number> = [];\n// TypeError: Cannot read property 'toFixed' of undefined\nconst firstElement = numbers[0].toFixed();\n")),Object(r.b)("p",null,'Let\'s go back to Hegel.\nThis behaivour also means that even if you try access an element in for loop you still get "number | undefined" element type. And you need to ',Object(r.b)("a",o({parentName:"p"},{href:"/hegel/docs/type-refinement"}),"refine")," that your value is not undefined."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const numbers: Array<number> = [1, 2, 3];\nfor (let i = 0; i < numbers.length; i++) {\n  const num = numbers[i]; // still "number | undefined"\n  if (typeof num === "number") {\n    // ...\n  }\n}\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'The reason of this decision is a mutable nature of "length" property of Array, so I can write next code, which will break my program without this property behaviour.\n',Object(r.b)("a",o({parentName:"p"},{href:"https://www.typescriptlang.org/v2/en/play?ts=3.8.0-beta#code/MYewdgzgLgBGCuBbARgUwE4QFwwILvQEMBPAHgRQwD4YBeGAbQEYAaGAJjYGYBdAbgBQAG1SwAlmCgBlVAEd4qMMFR0YAIjWCKaTADoRYAOZQAFqoCsggGYh0MABQjxqgAx8YYmKThIdEfYrGJu5iANShAJQwAN4CMDAA9AkwACrEAA6oAKIEtjgAwoRgYCCw6KiEACYw6eggmehQxDAA5FAgAGJiAB6olS0wIFYw8GCVqFYSfXEekjLyisowofTaGBAMYjy67V29lfYRggC+AkA"}),"TypeScript example"),", ",Object(r.b)("a",o({parentName:"p"},{href:"https://flow.org/try/#0PQKgBAAgZgNg9gdzCYAoAxnAdgZwC5hYCuAtgEYCmATjgFxgCCVVAhgJ4A8x51AfGAF4wAbQCMAGjAAmSQGYAugG5UMCgQCWWPAGUKARyIUs6CoLAAic8u6UaAOlVYA5ngAWZgKzKocKmAAUqhpmAAyKYOpgHISktjgORi6u4eoA1KkAlGAA3qhgYMDAYAAqbAAOFACizL70AMIsWFhwBFQULAAmYGVUcBVUeGxgAOR4cABi6gAeFB3DYHBQYERYHRRQmrN5EVq6BkYmYKlCNtQ4wurydmOTMx3+GcoAvqhAA"}),"Flow.js Example"))),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"const numbers: Array<number> = [1, 2, 3];\nlet intSequence = \"\";\nnumbers.length = 5;\nfor (let i = 0; i < numbers.length; i++) {\n  // TypeError: Cannot read property 'toFixed' of undefined\n  intSequence += numbers[i].toFixed();\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Why do not make length 'readonly' and add refinement for ",Object(r.b)("inlineCode",{parentName:"p"},"length"),' array property?". And the answer is a popular way for array clean. In many JavaScript program you may see the next line:'),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"someArray.length = 0\n")),Object(r.b)("p",{parentName:"blockquote"},"This is the most popular way for fast array cleaning.")),Object(r.b)("p",null,"For nowadays this is not JavaScript-way to iterate over the array. You can use ",Object(r.b)("inlineCode",{parentName:"p"},"forEach")," (or other additional array methods like ",Object(r.b)("inlineCode",{parentName:"p"},"map"),", ",Object(r.b)("inlineCode",{parentName:"p"},"filter")," and etc.) as a safe variant of iterating over the array."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const numbers: Array<number> = [1, 2, 3];\n// num type is "number"\nnumbers.forEach(num => { });\n')),Object(r.b)("h2",{id:"subtyping"},"Subtyping"),Object(r.b)("p",null,"Another safety part of Hegel Arrays is their invariant nature. You can't assign one array to another if they contain different element type:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const numbers: Array<number> = [1, 2, 3];\n\n// Error: Type "Array<number>" is incompatible with type "Array<number | string>"\nconst numbersOrStrings: Array<number | string> = numbers;\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The reason of this decision is a reference nature of JavaScript array. If Hegel allows this assign you will be able mutate source array via another and get unpredictable problems.")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const numbers: Array<number> = [1, 2, 3];\nconst numbersOrStrings: Array<number | string> = numbers;\n\nnumbersOrStrings.push("some string");\n\n// TypeError: num.toFixed is not a function\nconst fixedNumbers = numbers.map(num => num.toFixed(0));\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you are familiar with TypeScript, you may know about this problem. ",Object(r.b)("a",o({parentName:"p"},{href:"http://www.typescriptlang.org/play/index.html?ssl=1&ssc=1&pln=8&pc=1#code/MYewdgzgLgBGCuBbARgUwE4QFwwILvQEMBPAHgRQwD4YBeGAbQEYAaGAJjYGYBdAbgBQoSLAppMAeXQBlKOgCWYAObY8BEuSTiYAHxjQFymvTEYIggacky5ilQDoADvAgALABQAiCCESp9tsqeAJQWAPRhMAAqxI6oAKIEIOg4FPZQIABi8gAeqAAmMPIQcCCwhDAAZvBgwFDy4ELg0FW5BQByWmZ0cF2Y9oiEju4UdDRpGdl5+e4ADMGhAkA"}),"TypeScript Example"))))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/array-types.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-array-types-mdx-678d1e922abc34ac0999.js.map