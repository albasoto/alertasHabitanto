import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})


  export class BuscarPipe implements PipeTransform {
    transform(value: any, arg: any): any {
      const resultadoPost = [];
      for (const post of value) {
        if (post.titulo.indexOf(arg) > -1) {
          resultadoPost.push(post);
        };
        if (post.contenido.indexOf(arg) > -1) {
          resultadoPost.push(post);
        }
      }
  
      return resultadoPost;
    }

}
