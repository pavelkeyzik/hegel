(this.webpackJsonp=this.webpackJsonp||[]).push([[14],{1306:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));n(19),n(5),n(3),n(1),n(13),n(14),n(22);var a=n(59),o=n(66);n(36);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/object-types.mdx"}});var i={_frontmatter:r},c=o.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,s({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"object-types"},"Object Types"),Object(a.b)("hr",null),Object(a.b)("p",null,"Object is another fundamental part of JavaScript language. With object you can represent any composed data types as sequence of properties and values.\nYou can create object type in Hegel by using curly braces {} and name-value pairs using a colon ",Object(a.b)("inlineCode",{parentName:"p"},":")," split by commas ",Object(a.b)("inlineCode",{parentName:"p"},",")," (the same as in JavaScript)."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-typescript"}),'const user: { email: string, password: string } = {\n  name: "any.user@gmail.com",\n  password: "qwerty"\n};\n')),Object(a.b)("h2",{id:"strict-and-soft-object-types"},"Strict and Soft object types"),Object(a.b)("p",null,"Defined object type is strict by default, it means that you cannot define additional property in object literal if it was not defined inside object type."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-typescript"}),'/* Error: Type "{\n  name: \'any.user@gmail.com\',\n  password: \'qwerty\',\n  status: \'offline\'\n}" is incompatible with type "{ email: string, password: string }" */\nconst strictUser: { email: string, password: string } = {\n  name: "any.user@gmail.com",\n  password: "qwerty",\n  status: "offline"\n};\n')),Object(a.b)("p",null,"To make defined object type as soft you can add special statement ",Object(a.b)("inlineCode",{parentName:"p"},"...")," (three dots). This statement will give Hegel information that you want to include additional properties inside object type."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-typescript"}),'const softUser: { email: string, password: string, ... } = { // 👌!\n  name: "any.user@gmail.com",\n  password: "qwerty",\n  status: "offline"\n};\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you are familiar with Flow.js, in Flow.js this two examples (strict and soft object types) will look like this:")),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-typescript"}),'const strictUser: {| email: string, password: string |} = { // 👌!\n  name: "any.user@gmail.com",\n  password: "qwerty"\n};\n')),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-typescript"}),'const softUser: { email: string, password: string } = { // 👌!\n  name: "any.user@gmail.com",\n  password: "qwerty",\n  status: "offline"\n};\n')),Object(a.b)("h2",{id:"optional-object-type-properties"},"Optional object type properties"),Object(a.b)("p",null,"As was mentioned in ",Object(a.b)("a",s({parentName:"p"},{href:"/hegel/docs/optional-types"}),"Optional Types"),", you can define object properties as optional by adding ",Object(a.b)("inlineCode",{parentName:"p"},"?"),"(question mark) before the type name."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-typescript"}),'const user: { email: string, password: ?string } = { name: "any.user@gmail.com" }; // 👌!\n')),Object(a.b)("p",null,"The logic is next - if you try to access to property which does not exist in object then value of this property will be undefined. Optional Types annotate that type of argument/variable/property can have annotated type value or undefined, so, undefined will be a valid value for this property."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'If you are familiar with Flow.js or TypeScript, you may know about similar optional property syntax inside this two "analyzers", which look like this:'),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",s({parentName:"pre"},{className:"language-typescript"}),'const user: { email: string, password?: string } = { name: "any.user@gmail.com" }; // 👌!\n')),Object(a.b)("p",{parentName:"blockquote"},"But Hegel doesn't have this syntax and define the same syntax for two situations (when your property is optional and when your property can contain undefined.")),Object(a.b)("h2",{id:"object"},"Object"),Object(a.b)("p",null,"Also, Hegel supports ",Object(a.b)("inlineCode",{parentName:"p"},"Object")," type which represents any possible object in JavaScript:"),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-typescript"}),'function json(obj: Object) {\n  return JSON.stringify(obj); \n}\n\njson({ baz: 3.14, bar: "hello" }); // 👌!\njson({});                          // 👌!\njson(new Object);                  // 👌!\n// Because Array is an object in JavaScript\njson([]);                          // 👌!\n// Because Function is an object in JavaScript\njson(() => 2);                     // 👌!\n\n// Error: Type "2" is incompatible with type "Object"\njson(2);\n')))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/object-types.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-object-types-mdx-2d493f0d14d7204221c2.js.map