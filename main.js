var input = process.argv.slice(2);
  let string = '';

  for (let i = 0; i < input.length; i++) {
    let word = input[i];

    for (let j = 0; j < word.length; j++) {
      let c = word[j];

      switch (c) {
        case '1':
          string += 'One';
          break;
        case '2':
          string += 'Two';
          break;
        case '3':
          string += 'Three';
          break;
        case '4':
          string += 'Four';
          break;
        case '5':
          string += 'Five';
          break;
        case '6':
          string += 'Six';
          break;
        case '7':
          string += 'Seven';
          break;
        case '8':
          string += 'Eight';
          break;
        case '9':
          string += 'Nine';
          break;
        case '0':
          string += 'Zero';
          break;
        default:
          break;
      }

      if (j >= word.length - 1 && i != input.length - 1) {
        string += ', ';
      }
    }
  }

console.log(string);
