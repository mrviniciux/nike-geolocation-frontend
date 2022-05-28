import React from 'react';
import Swal from 'sweetalert2';

export default class Flash extends React.Component {
  static create(type, messages) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-start',
      showConfirmButton: false,
      timer: 3000,
    });

    try {
      return Toast.fire({
        type,
        title: messages.join('\n *'),
      });
    } catch (e) {
      throw new Error(`Failed to generate Flash message: ${e}`);
    }
  }
}
