let anyVar: any;
anyVar = true;
anyVar = 12;
anyVar = 'sdfgn';
anyVar = {};
anyVar = [];
anyVar = null;
anyVar = undefined;

let isNew: boolean = anyVar;

anyVar.touppercase();

let unknowVar: unknown;
unknowVar = true;
unknowVar = 12;
unknowVar = 'sdfgn';
unknowVar = {};
unknowVar = [];
unknowVar = null;
unknowVar = undefined;

// unknown.doSomething();
if (typeof unknowVar === "string") {
  unknowVar.toLocaleLowerCase();
}

if (typeof unknowVar === "boolean") {
  let isNewV2: boolean = unknowVar;
}



const parse = (str: string): unknown => {
  return JSON.parse(str);
};

