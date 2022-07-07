import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';

const DARK = '#19191a';
const WHITE = 'white';

export const ToastMessage = function (
  title: string,
  icon: SweetAlertIcon,
  position: SweetAlertPosition = 'bottom-right',
  color?: 'dark' | 'white',
  duration?: number
) {
  const t = Swal.mixin({
    toast: true,
    position: position,
    timer: duration ? duration : 15000,
    showConfirmButton: false,
    background: color === 'dark' ? DARK : WHITE,
    color: color === 'dark' ? WHITE : DARK,
    timerProgressBar: true,
  });

  t.fire({
    icon: icon,
    title: title,
  });
};

export const AlertMessage = function (
  title: string,
  icon: SweetAlertIcon,
  // position: SweetAlertPosition = 'bottom-right',
  // color?: 'dark' | 'white',
  duration: number = 12000
) {
  Swal.fire({
    position: 'top-right',
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: duration,
  });
};


export const getUrl = function (): string {
  return "http://localhost:3000"
}