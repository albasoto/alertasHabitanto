import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})


export class BuscarPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg == '' || arg.length < 3) return value;
    const resultadoPost = [];
    for (const post of value) {
      if (post.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultadoPost.push(post);
      };
      if (post.tipo_alerta.indexOf(arg) > -1) {
        resultadoPost.push(post);
      }
    }

    return resultadoPost;
  }

}
