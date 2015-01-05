var state = 'none';
function showhide(layer_ref, state) {
    if (document.all) { //IS IE 4 or 5 (or 6 beta) 
        eval("document.all." + layer_ref + ".style.display = state");
    }

    if (document.layers) { //IS NETSCAPE 4 or below 
        document.layers[layer_ref].display = state;
    }

    if (document.getElementById && !document.all) {
        hza = document.getElementById(layer_ref);
        hza.style.display = state;
    }
}

var broj = "0"
var tocka = 0
var eksp = 0
var eksponent = 3
var rjesenje = 0
var zastavica = 0
var decimala = 0
var enter = ""
var ConstOpen = 0
var ConstWin = ""
var MenuOpen = 0
var MenuWin = ""
var CalcOpen = 0
var CalcWin = ""
var MainWin = ""
var element = ""
var abc = "";


function start() {
    enter = document.racunalo.notes.value;
    if (enter.length > 2) { enter = enter.charAt(enter.length - 1) }
    document.racunalo.notes.value = "";
    zadatakfocus()
}


function remote(stranica) {
    ConstOpen = 1;
    if (ConstWin.open) {
        ConstWin.document.konstante.naslov.focus()
    }
    else {
        ConstWin = window.open(stranica, "", "width=300,height=500,scrollbars=yes");
        ConstWin.creator = self
    }
}


function Zatvoreno() {
    if (ConstOpen == 1) { ConstWin.ConstOpen = 1; ConstWin.close() }
    if (CalcOpen == 1) { CalcWin.close() }
    if (MenuOpen == 1) { MenuWin.close() }
}


function memory(operator) {

    zadatakfocus();

    if (operator == 1) {		// MS 
        document.racunalo.memorija.value = document.racunalo.rezultat.value
    }
    else if (operator == 2) {	// MR
        var memorija = document.racunalo.memorija.value;
        if (memorija == 0 || slovo(memorija.charAt(0))) { memorija = "" };
        document.racunalo.zadatak.value += memorija
    }
    else if (operator == 3) {	// CLS
        if (document.racunalo.zadatak.value == "") {
            document.racunalo.rezultat.value = ""
        }
        else {
            document.racunalo.zadatak.value = ""
        }
    }
    else if (operator == 4) {	// Reset
        document.racunalo.notes.value = "";
        zadatakfocus()
    }
    else if (operator == 5) {	// <--
        if (!document.racunalo.zadatak.value == "") {
            var strtask = document.racunalo.zadatak.value;
            document.racunalo.zadatak.value = strtask.substring(0, strtask.length - 1);
        }
    }

    localStorage.setItem('rememberedtaskhistory', document.racunalo.notes.value);

}


function display(noviznak) {
    if (noviznak == "")
    { zadatakfocus() }
    else
    { document.racunalo.rezultat.select() }
}


function dodajBroj(noviznak) {
    document.racunalo.zadatak.value += noviznak;
    zadatakfocus();



}


function izracunaj(zarez) {
    var pitanje = "";
    var mem = 0;

    if (zarez >= 1) {
        if (document.racunalo.zadatak.value == "") {
            broj = document.racunalo.oldrezultat.value
        }
        else {
            broj = document.racunalo.zadatak.value;
            if (ubacirezultat(broj.charAt(0))) {
                broj = document.racunalo.oldrezultat.value + broj
            }
        }
    }

    var broj = broj.replace(/\(\-\)/g, '-');

    for (var i = 0; i < broj.length; i++) {
        if (lettercheck(broj.charAt(i))) { var kem = 1 };
        if (broj.charAt(i) == ",") { pitanje += "." }
        else if (broj.charAt(i) == " ") { }
        else { pitanje += broj.charAt(i) }
    }

    if (operator(broj.charAt(broj.length - 1))) { return false };

    if (zarez == 1) {
        var thenewline = '';
        if (document.racunalo.notes.value == '') {
            thenewline = '';
        }
        else {
            thenewline = '\n';
        }

        debugger;
        document.racunalo.notes.value += thenewline + pitanje + enter;
        if (kem == 1) {
            var atom = "+" + pitanje;
            pitanje = masa(atom)
        }
        else {
            pitanje = eval("1*" + pitanje)
        }
    }
    else if (zarez > 1) {
        pitanje = eval("1*" + pitanje);
        pitanje = matematika(zarez, pitanje)
    }

    document.racunalo.oldrezultat.value = pitanje;

    zaokruzi(pitanje);

    document.racunalo.notes.scrollTop = document.racunalo.notes.scrollHeight - document.racunalo.notes.clientHeight;

    document.racunalo.zadatak.value = "";
    zadatakfocus()

    localStorage.setItem('rememberedtaskhistory', document.racunalo.notes.value);
}


function matematika(zarez, rjesenje) {
    with (Math) {
        var thenewline = '';
        if (document.racunalo.notes.value == '') {
            thenewline = '';
        }
        else {
            thenewline = '\n';
        }
        if (zarez == 2) {
            document.racunalo.notes.value += thenewline + rjesenje + "^2" + enter;
            rjesenje = pow(rjesenje, 2)
        }
        else if (zarez == 3) {
            document.racunalo.notes.value += thenewline + rjesenje + "^(1/2)" + enter;
            rjesenje = sqrt(rjesenje)
        }
        else if (zarez == 4) {
            document.racunalo.notes.value += thenewline + rjesenje + "*(-1)" + enter;
            rjesenje = -rjesenje
        }
        else if (zarez == 5) {
            document.racunalo.notes.value += thenewline + "ln(" + rjesenje + ")" + enter;
            rjesenje = log(rjesenje)
        }
        else if (zarez == 6) {
            document.racunalo.notes.value += thenewline + "e^" + rjesenje + enter;
            rjesenje = pow(E, rjesenje)
        }
        else if (zarez == 7) {
            document.racunalo.notes.value += thenewline + "1/" + rjesenje + enter;
            rjesenje = 1 / rjesenje
        }
        else if (zarez == 8) {
            document.racunalo.notes.value += thenewline + "log(" + rjesenje + ")" + enter;
            rjesenje = log(rjesenje) / LN10
        }
        else if (zarez == 9) {
            document.racunalo.notes.value += thenewline + "10^" + rjesenje + enter;
            rjesenje = pow(10, rjesenje)
        }
        else if (zarez >= 10 && zarez <= 12) {
            if (zarez == 10) {
                document.racunalo.notes.value += thenewline + "atan(" + rjesenje + ")" + enter;
                rjesenje = atan(rjesenje)
            }
            else if (zarez == 11) {
                document.racunalo.notes.value += thenewline + "acos(" + rjesenje + ")" + enter;
                rjesenje = acos(rjesenje)
            }
            else if (zarez == 12) {
                document.racunalo.notes.value += thenewline + "asin(" + rjesenje + ")" + enter;
                rjesenje = asin(rjesenje)
            }

            if (document.racunalo.stupnjevi[1].checked) { rjesenje = (rjesenje * 180) / PI }
        }
        else if (zarez >= 14 && zarez <= 16) {
            if (document.racunalo.stupnjevi[1].checked)
            { radijani = (rjesenje / 180) * PI }
            else
            { radijani = rjesenje };

            if (zarez == 14) {
                document.racunalo.notes.value += thenewline + "tan(" + rjesenje + ")" + enter;
                rjesenje = tan(radijani)
            }
            else if (zarez == 15) {
                document.racunalo.notes.value += thenewline + "cos(" + rjesenje + ")" + enter;
                rjesenje = cos(radijani)
            }
            else if (zarez == 16) {
                document.racunalo.notes.value += thenewline + "sin(" + rjesenje + ")" + enter;
                rjesenje = sin(radijani)
            }
        }
        else if (zarez == 17) {
            document.racunalo.notes.value += thenewline + rjesenje + "%" + enter;
            rjesenje = rjesenje / 100
        }
        else if (zarez == 18) {
            document.racunalo.notes.value += thenewline + rjesenje + "ppm" + enter;
            rjesenje = rjesenje / 1000000
        }
        else if (zarez == 20) {
            document.racunalo.notes.value += thenewline + rjesenje + "!" + enter;
            rjesenje = factorial(rjesenje)
        }
        else if (zarez == 21) {
            eksponent = prompt("Please enter exponent", 3);
            document.racunalo.notes.value += thenewline + rjesenje + "^" + eksponent + enter;
            rjesenje = pow(rjesenje, eksponent)
        }
        else if (zarez == 22) {
            eksponent = prompt("Please enter root", 3);
            document.racunalo.notes.value += thenewline + rjesenje + "^(1/" + eksponent + ")" + enter;
            rjesenje = pow(rjesenje, (1 / eksponent))
        }
        return rjesenje
    }

    localStorage.setItem('rememberedtaskhistory', document.racunalo.notes.value);
}


function zaokruzi(ebroj) {

    decimala = parseFloat(document.racunalo.izaZareza.options[document.racunalo.izaZareza.selectedIndex].value);
    var strbroj = ebroj + " ";
    if (strbroj.charAt(0) == ".") { strbroj = "0" + strbroj };
    var intbroj = strbroj.length - 1;
    deczarez(strbroj);

    if (intbroj > 16 && eksp == -1) {
        if (decimala == -1) { decimala = 12 };
        strbroj = izazareza(strbroj.substring(0, intbroj)) + " ";
        intbroj = strbroj.length - 1;
        deczarez(strbroj)
    }

    if (decimala >= 0 && decimala != 12) {
        if (tocka > 0) {
            var odgovor = izazareza(strbroj.substring(0, intbroj))
        }
        else {
            ebroj = strbroj.substring(0, intbroj);
            if (decimala > 0) {
                ebroj += ".";
                for (var n = 0; n < decimala; n++) {
                    ebroj += "0"
                }
            }
            var odgovor = ebroj
        }
    }
    else {
        decimala = 12;
        var odgovor = izazareza(strbroj)
    }

    if (odgovor.charAt(0) == ".") { odgovor = "0" + odgovor };

    document.racunalo.rezultat.value = odgovor;
    document.racunalo.notes.value += " = " + odgovor + enter;

    localStorage.setItem('rememberedtaskhistory', document.racunalo.notes.value);
}


function deczarez(novibroj) {
    tocka = 0;
    eksp = 0;

    tocka = novibroj.indexOf(".");
    eksp = novibroj.indexOf("e")
}


function izazareza(novibroj) {
    with (Math) {

        if (eksp == -1) {
            var duzina = tocka;
            if (duzina == -1) { duzina = novibroj.length };
            var desni = "";

            if (duzina > 16) {
                var privremeni = round(novibroj * pow(10, 18)) + " ";
                var novie = privremeni.indexOf("e");
                var lijevi = (privremeni.substring(0, novie));

                lijevi = round(lijevi * pow(10, 15)) / pow(10, 15) + " ";
                desni = (privremeni.substring(novie + 2, privremeni.length - 1));
                desni = "e+" + (desni - 18)
            }
            else {
                var lijevi = round(novibroj * pow(10, decimala)) / pow(10, decimala) + " "
            }
        }
        else {
            var lijevi = novibroj.substring(0, eksp);
            var desni = novibroj.substring(eksp, novibroj.length);

            lijevi = round(lijevi * pow(10, decimala)) / pow(10, decimala) + " "
        }

        lijevi = lijevi.substring(0, lijevi.length - 1);

        if (lijevi.charAt(0) == ".") { lijevi = "0" + lijevi };

        if (decimala < 12) {
            if (lijevi.indexOf(".") == -1 && decimala != 0) { lijevi += "." };
            var nula = (tocka + decimala) - (lijevi.length - 1);
            if (nula > 0 && decimala > 0) {
                for (var n = 0; n < nula; n++) {
                    lijevi += "0"
                }
            }
        }

        return (lijevi + " " + desni)
    }
}


function factorial(n) {
    if ((n == 0) || (n == 1)) {
        return 1
    }
    else {
        var odgovor = (n * factorial(n - 1));
        return odgovor
    }
}


function masa(atom) {
    with (Math) {
        var atominfo = false
        var mm = ""
        var mmdn = ""
        var mmup = ""
        var znak = ""
        var izraz = ""
        var H = 1.00794
        var He = 4.002602
        var Li = 6.941
        var Be = 9.012182
        var B = 10.811
        var C = 12.0107
        var N = 14.0067
        var O = 15.9994
        var F = 18.9984032
        var Ne = 20.1797
        var Na = 22.98977
        var Mg = 24.305
        var Al = 26.981538
        var Si = 28.0855
        var P = 30.973761
        var S = 32.065
        var Cl = 35.453
        var Ar = 39.948
        var K = 39.0983
        var Ca = 40.078
        var Sc = 44.95591
        var Ti = 47.867
        var V = 50.9415
        var Cr = 51.9961
        var Mn = 54.938049
        var Fe = 55.845
        var Co = 58.9332
        var Ni = 58.6934
        var Cu = 63.546
        var Zn = 65.39
        var Ga = 69.723
        var Ge = 72.64
        var As = 74.9216
        var Se = 78.96
        var Br = 79.904
        var Kr = 83.8
        var Rb = 85.4678
        var Sr = 87.62
        var Y = 88.90585
        var Zr = 91.224
        var Nb = 92.90638
        var Mo = 95.94
        var Tc = 98
        var Ru = 101.07
        var Rh = 102.9055
        var Pd = 106.42
        var Ag = 107.8682
        var Cd = 112.411
        var In = 114.818
        var Sn = 118.71
        var Sb = 121.76
        var Te = 127.6
        var I = 126.90447
        var Xe = 131.293
        var Cs = 132.90545
        var Ba = 137.327
        var La = 138.9055
        var Ce = 140.116
        var Pr = 140.90765
        var Nd = 144.24
        var Pm = 145
        var Sm = 150.36
        var Eu = 151.964
        var Gd = 157.25
        var Tb = 158.92534
        var Dy = 162.5
        var Ho = 164.93032
        var Er = 167.259
        var Tm = 168.93421
        var Yb = 173.04
        var Lu = 174.967
        var Hf = 178.49
        var Ta = 180.9479
        var W = 183.84
        var Re = 186.207
        var Os = 190.23
        var Ir = 192.217
        var Pt = 195.078
        var Au = 196.96655
        var Hg = 200.59
        var Tl = 204.3833
        var Pb = 207.2
        var Bi = 208.98038
        var Po = 209
        var At = 210
        var Rn = 222
        var Fr = 223
        var Ra = 226
        var Ac = 227
        var Th = 232.0381
        var Pa = 231.03588
        var U = 238.02891
        var Np = 237
        var Pu = 244
        var Am = 243
        var Cm = 247
        var Bk = 247
        var Cf = 251
        var Es = 252
        var Fm = 257
        var Md = 258
        var No = 259
        var Lr = 262
        var Pi = 3.141592653589793;

        for (var i = 0; i < atom.length; i++) {
            mm = atom.charAt(i)
            mmup = atom.charAt(i + 1)
            bigup = mm.toUpperCase()
            mmdn = atom.charAt(i - 1);

            if (mm == "[") { mm = "(" }
            else if (mm == "]") { mm = ")" }
            else if (mm == ",") { mm = "." }

            if (slovo(mm)) { atominfo = true };
            if (matoperator(mm)) { atominfo = false; znak = "" };
            if (atominfo) {
                if (matoperator(mmup)) { znak = ")" }
                if (matoperator(mmdn)) { izraz += "(" + mm + znak }
                else if (mmdn == "(") { izraz += mm + znak }
                else if (mmdn == "[") { izraz += mm + znak }
                else if (slovo(mm)) { izraz += "+" + mm + znak }
                else if (BrojAtoma(mmdn)) { izraz += mm + znak }
                else if (BrojAtoma(mm)) { izraz += "*" + mm + znak }
                else { izraz += mm + znak }
            }
            else { izraz += mm }
        }
        odgovor = eval(izraz);
        return odgovor
    }
}


function slovo(znak) {
    var slovo = "(ABCDEFGHIKLMNOPRSTUVWXYZ";
    for (var i = 0; i < slovo.length; i++)
        if (znak == slovo.charAt(i)) { return true } { return false }
}

function lettercheck(znak) {
    var slovo = "ABCDEFGHIKLMNOPRSTUVWXYZ";
    for (var i = 0; i < slovo.length; i++)
        if (znak == slovo.charAt(i)) { return true } { return false }
}


function matoperator(znak) {
    var matoperator = "*/+-";
    for (var i = 0; i < matoperator.length; i++)
        if (znak == matoperator.charAt(i)) { return true }
    if (znak == "") { return true }
    if (znak == null) { return true }
    return false
}

function operator(znak) {
    var matoperator = "*/+-";
    for (var i = 0; i < matoperator.length; i++)
        if (znak == matoperator.charAt(i)) { return true }
    return false
}

function ubacirezultat(znak) {
    var ubacirezultat = "*/+-";
    for (var i = 0; i < ubacirezultat.length; i++)
        if (znak == ubacirezultat.charAt(i)) { return true }
    return false
}

function BrojAtoma(znak) {
    var atom = "1234567890";
    for (var i = 0; i < atom.length; i++)
        if (znak == atom.charAt(i)) { return true } { return false }
}


function Slika(adresa) {
    window.opener.location = adresa
}


function MenuBotun(adresa) {
    if (MenuWin.open) {
        MenuWin.document.daljinski.elementi.focus()
    }
    else {
        MenuWin = window.open(abc + adresa, "_blank", "width=110,height=270,toolbar=0,directories=0,resizable=1,scrollbars=0");
        MenuWin.creator = self;
        MenuOpen = 1
    }
}


function CalcBotun(adresa) {
    if (CalcWin.open) {
        CalcWin.document.racunalo.zadatak.focus()
    }
    else {
        CalcWin = window.open(abc + adresa, "_blank", "width=308,height=425,toolbar=0,directories=0,resizable=1,scrollbars=0");
        CalcWin.creator = self;
        CalcOpen = 1
    }
}


function NoviElement(noviznak) {
    var greska = 0;
    noviznak = noviznak.toLowerCase()

    if (noviznak == "h" || noviznak == "hydrogen" || noviznak == "1") { element = "h" }
    else if (noviznak == "he" || noviznak == "helium" || noviznak == "2") { element = "he" }
    else if (noviznak == "li" || noviznak == "lithium" || noviznak == "3") { element = "li" }
    else if (noviznak == "be" || noviznak == "beryllium" || noviznak == "4") { element = "be" }
    else if (noviznak == "b" || noviznak == "boron" || noviznak == "5") { element = "b" }
    else if (noviznak == "c" || noviznak == "carbon" || noviznak == "6") { element = "c" }
    else if (noviznak == "n" || noviznak == "nitrogen" || noviznak == "7") { element = "n" }
    else if (noviznak == "o" || noviznak == "oxygen" || noviznak == "8") { element = "o" }
    else if (noviznak == "f" || noviznak == "fluorine" || noviznak == "9") { element = "f" }
    else if (noviznak == "ne" || noviznak == "neon" || noviznak == "10") { element = "ne" }
    else if (noviznak == "na" || noviznak == "sodium" || noviznak == "11") { element = "na" }
    else if (noviznak == "mg" || noviznak == "magnesium" || noviznak == "12") { element = "mg" }
    else if (noviznak == "al" || noviznak == "aluminium" || noviznak == "13") { element = "al" }
    else if (noviznak == "si" || noviznak == "silicon" || noviznak == "14") { element = "si" }
    else if (noviznak == "p" || noviznak == "phosphorus" || noviznak == "15") { element = "p" }
    else if (noviznak == "s" || noviznak == "sulfur" || noviznak == "16") { element = "s" }
    else if (noviznak == "cl" || noviznak == "chlorine" || noviznak == "17") { element = "cl" }
    else if (noviznak == "ar" || noviznak == "argon" || noviznak == "18") { element = "ar" }
    else if (noviznak == "k" || noviznak == "potassium" || noviznak == "19") { element = "k" }
    else if (noviznak == "ca" || noviznak == "calcium" || noviznak == "20") { element = "ca" }
    else if (noviznak == "sc" || noviznak == "scandium" || noviznak == "21") { element = "sc" }
    else if (noviznak == "ti" || noviznak == "titanium" || noviznak == "22") { element = "ti" }
    else if (noviznak == "v" || noviznak == "vanadium" || noviznak == "23") { element = "v" }
    else if (noviznak == "cr" || noviznak == "chromium" || noviznak == "24") { element = "cr" }
    else if (noviznak == "mn" || noviznak == "manganese" || noviznak == "25") { element = "mn" }
    else if (noviznak == "fe" || noviznak == "iron" || noviznak == "26") { element = "fe" }
    else if (noviznak == "co" || noviznak == "cobalt" || noviznak == "27") { element = "co" }
    else if (noviznak == "ni" || noviznak == "nickel" || noviznak == "28") { element = "ni" }
    else if (noviznak == "cu" || noviznak == "copper" || noviznak == "29") { element = "cu" }
    else if (noviznak == "zn" || noviznak == "zinc" || noviznak == "30") { element = "zn" }
    else if (noviznak == "ga" || noviznak == "gallium" || noviznak == "31") { element = "ga" }
    else if (noviznak == "ge" || noviznak == "germanium" || noviznak == "32") { element = "ge" }
    else if (noviznak == "as" || noviznak == "arsenic" || noviznak == "33") { element = "as" }
    else if (noviznak == "se" || noviznak == "selenium" || noviznak == "34") { element = "se" }
    else if (noviznak == "br" || noviznak == "bromine" || noviznak == "35") { element = "br" }
    else if (noviznak == "kr" || noviznak == "krypton" || noviznak == "36") { element = "kr" }
    else if (noviznak == "rb" || noviznak == "rubidium" || noviznak == "37") { element = "rb" }
    else if (noviznak == "sr" || noviznak == "strontium" || noviznak == "38") { element = "sr" }
    else if (noviznak == "y" || noviznak == "yttrium" || noviznak == "39") { element = "y" }
    else if (noviznak == "zr" || noviznak == "zirconium" || noviznak == "40") { element = "zr" }
    else if (noviznak == "nb" || noviznak == "niobium" || noviznak == "41") { element = "nb" }
    else if (noviznak == "mo" || noviznak == "molybdenum" || noviznak == "42") { element = "mo" }
    else if (noviznak == "tc" || noviznak == "technetium" || noviznak == "43") { element = "tc" }
    else if (noviznak == "ru" || noviznak == "ruthenium" || noviznak == "44") { element = "ru" }
    else if (noviznak == "rh" || noviznak == "rhodium" || noviznak == "45") { element = "rh" }
    else if (noviznak == "pd" || noviznak == "palladium" || noviznak == "46") { element = "pd" }
    else if (noviznak == "ag" || noviznak == "silver" || noviznak == "47") { element = "ag" }
    else if (noviznak == "cd" || noviznak == "cadmium" || noviznak == "48") { element = "cd" }
    else if (noviznak == "in" || noviznak == "indium" || noviznak == "49") { element = "in" }
    else if (noviznak == "sn" || noviznak == "tin" || noviznak == "50") { element = "sn" }
    else if (noviznak == "sb" || noviznak == "antimony" || noviznak == "51") { element = "sb" }
    else if (noviznak == "te" || noviznak == "tellurium" || noviznak == "52") { element = "te" }
    else if (noviznak == "i" || noviznak == "iodine" || noviznak == "53") { element = "i" }
    else if (noviznak == "xe" || noviznak == "xenon" || noviznak == "54") { element = "xe" }
    else if (noviznak == "cs" || noviznak == "cesium" || noviznak == "55") { element = "cs" }
    else if (noviznak == "ba" || noviznak == "barium" || noviznak == "56") { element = "ba" }
    else if (noviznak == "la" || noviznak == "lanthanum" || noviznak == "57") { element = "la" }
    else if (noviznak == "ce" || noviznak == "cerium" || noviznak == "58") { element = "ce" }
    else if (noviznak == "pr" || noviznak == "praseodymium" || noviznak == "59") { element = "pr" }
    else if (noviznak == "nd" || noviznak == "neodymium" || noviznak == "60") { element = "nd" }
    else if (noviznak == "pm" || noviznak == "promethium" || noviznak == "61") { element = "pm" }
    else if (noviznak == "sm" || noviznak == "samarium" || noviznak == "62") { element = "sm" }
    else if (noviznak == "eu" || noviznak == "europium" || noviznak == "63") { element = "eu" }
    else if (noviznak == "gd" || noviznak == "gadolinium" || noviznak == "64") { element = "gd" }
    else if (noviznak == "tb" || noviznak == "terbium" || noviznak == "65") { element = "tb" }
    else if (noviznak == "dy" || noviznak == "dysprosium" || noviznak == "66") { element = "dy" }
    else if (noviznak == "ho" || noviznak == "holmium" || noviznak == "67") { element = "ho" }
    else if (noviznak == "er" || noviznak == "erbium" || noviznak == "68") { element = "er" }
    else if (noviznak == "tm" || noviznak == "thulium" || noviznak == "69") { element = "tm" }
    else if (noviznak == "yb" || noviznak == "ytterbium" || noviznak == "70") { element = "yb" }
    else if (noviznak == "lu" || noviznak == "lutetium" || noviznak == "71") { element = "lu" }
    else if (noviznak == "hf" || noviznak == "hafnium" || noviznak == "72") { element = "hf" }
    else if (noviznak == "ta" || noviznak == "tantalum" || noviznak == "73") { element = "ta" }
    else if (noviznak == "w" || noviznak == "tungsten" || noviznak == "74") { element = "w" }
    else if (noviznak == "re" || noviznak == "rhenium" || noviznak == "75") { element = "re" }
    else if (noviznak == "os" || noviznak == "osmium" || noviznak == "76") { element = "os" }
    else if (noviznak == "ir" || noviznak == "iridium" || noviznak == "77") { element = "ir" }
    else if (noviznak == "pt" || noviznak == "platinum" || noviznak == "78") { element = "pt" }
    else if (noviznak == "au" || noviznak == "gold" || noviznak == "79") { element = "au" }
    else if (noviznak == "hg" || noviznak == "mercury" || noviznak == "80") { element = "hg" }
    else if (noviznak == "tl" || noviznak == "thallium" || noviznak == "81") { element = "tl" }
    else if (noviznak == "pb" || noviznak == "lead" || noviznak == "82") { element = "pb" }
    else if (noviznak == "bi" || noviznak == "bismuth" || noviznak == "83") { element = "bi" }
    else if (noviznak == "po" || noviznak == "polonium" || noviznak == "84") { element = "po" }
    else if (noviznak == "at" || noviznak == "astatine" || noviznak == "85") { element = "at" }
    else if (noviznak == "rn" || noviznak == "radon" || noviznak == "86") { element = "rn" }
    else if (noviznak == "fr" || noviznak == "francium" || noviznak == "87") { element = "fr" }
    else if (noviznak == "ra" || noviznak == "radium" || noviznak == "88") { element = "ra" }
    else if (noviznak == "ac" || noviznak == "actinium" || noviznak == "89") { element = "ac" }
    else if (noviznak == "th" || noviznak == "thorium" || noviznak == "90") { element = "th" }
    else if (noviznak == "pa" || noviznak == "protactinium" || noviznak == "91") { element = "pa" }
    else if (noviznak == "u" || noviznak == "uranium" || noviznak == "92") { element = "u" }
    else if (noviznak == "np" || noviznak == "neptunium" || noviznak == "93") { element = "np" }
    else if (noviznak == "pu" || noviznak == "plutonium" || noviznak == "94") { element = "pu" }
    else if (noviznak == "am" || noviznak == "americium" || noviznak == "95") { element = "am" }
    else if (noviznak == "cm" || noviznak == "curium" || noviznak == "96") { element = "cm" }
    else if (noviznak == "bk" || noviznak == "berkelium" || noviznak == "97") { element = "bk" }
    else if (noviznak == "cf" || noviznak == "californium" || noviznak == "98") { element = "cf" }
    else if (noviznak == "es" || noviznak == "einsteinium" || noviznak == "99") { element = "es" }
    else if (noviznak == "fm" || noviznak == "fermium" || noviznak == "100") { element = "fm" }
    else if (noviznak == "md" || noviznak == "mendelevium" || noviznak == "101") { element = "md" }
    else if (noviznak == "no" || noviznak == "nobelium" || noviznak == "102") { element = "no" }
    else if (noviznak == "lr" || noviznak == "lawrencium" || noviznak == "103") { element = "lr" }
    else if (noviznak == "rf" || noviznak == "rutherfordium" || noviznak == "104") { element = "rf" }
    else if (noviznak == "db" || noviznak == "dubnium" || noviznak == "105") { element = "db" }
    else if (noviznak == "sg" || noviznak == "seaborgium" || noviznak == "106") { element = "sg" }
    else if (noviznak == "bh" || noviznak == "bohrium" || noviznak == "107") { element = "bh" }
    else if (noviznak == "hs" || noviznak == "hassium" || noviznak == "108") { element = "hs" }
    else if (noviznak == "mt" || noviznak == "meitnerium" || noviznak == "109") { element = "mt" }
    else if (noviznak == "uun" || noviznak == "ununnilium" || noviznak == "110") { element = "uun" }
    else if (noviznak == "uuu" || noviznak == "unununium" || noviznak == "111") { element = "uuu" }
    else if (noviznak == "uub" || noviznak == "ununbium" || noviznak == "112") { element = "uub" }
    else if (noviznak == "uuq" || noviznak == "ununquadium" || noviznak == "114") { element = "uuq" }
    else if (noviznak == "") { greska = 1 }
    else {
        window.alert("Input ELEMENT SYMBOL, ATOMIC NUMBER or NAMES OF ELEMENTS!");
        greska = 1
    }

    if (greska == 0) { MainWin = window.open(abc + element + ".html", "_self") }
}