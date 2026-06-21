function questionName(input) {
    const s1 = "pass, pass, fail, pass, skip, pass, fail, pass";
    const s2 = "pass";
    const regex = new RegExp(s2, "g");
    const count = (s1.match(regex) || []).length;
    return count;
}

let c = questionName("pass");
console.log(c, "Passed");

let b = questionName("fail");
console.log(b, "Failed")