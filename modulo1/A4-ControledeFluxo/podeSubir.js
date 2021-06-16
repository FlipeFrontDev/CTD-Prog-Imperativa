let acompanhada = true;

function podeSubir(altura, acomp) {

	if(altura > 1.40 && altura < 2.00) {

		return 'Acesso autorizado!';

	} else if (altura < 1.40 && acomp == true) {

		return 'Acesso autorizado somente com acompanhante!';

	} else {

		return 'Acesso negado!';

	}
};

console.log(podeSubir(1.39, true));