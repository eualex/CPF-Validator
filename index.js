document.querySelector('.cpf-form').addEventListener('submit', event => {
  event.preventDefault();

  const cpf = document.querySelector('.cpf').value;
  validaCPF(cpf);
});

const validaCPF = (cpf, digit=0) => {
  const arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  const arr2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

  let newcpf = cpf.split('');
  let checkDigit = [];

  const newarr = [];
  let sum = 0;
  
  if (newcpf.length === 11) {
    newcpf.map((n, i) => {
      if(i === 9 || i === 10) {
        checkDigit.push(newcpf[i]);
      }
    })
    newcpf.pop();
    newcpf.pop();
  }

  if (newcpf.length === 9) {
    arr1.map((val, index) => {
      newarr.push(val * newcpf[index])
    });
  } else if (newcpf.length === 10) {
    arr2.map((val, index) => {
      newarr.push(val * newcpf[index])
    });
    checkDigit.push(...digit);
  }

  newarr.map(n => {
    sum += n
  });

  let vnumber = parseInt(sum / 11);
  let vnumber2 = sum % 11;

  if (vnumber < 2) {
    newcpf.push(String(0));
  } else {
    let vnumber3 = 11 - vnumber2;
    newcpf.push(String(vnumber3));
  }

  if (newcpf.length === 11) {
    if (newcpf[9] === checkDigit[0] && newcpf[10] === checkDigit[1]) {
      return alert('CPF VÁLIDO');
    } else {
      return alert('CPF INVÁLIDO');
    }
  } else if (newcpf.length === 10) {
    validaCPF(String(newcpf.join('')), checkDigit);
  }
}

// código baseada na lógica do site: https://www.geradorcpf.com/algoritmo_do_cpf.htm 