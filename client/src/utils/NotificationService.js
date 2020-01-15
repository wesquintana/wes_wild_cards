export default class NotificationService {
  static async inputData(title = "Enter Inputs") {
    try {
      const { value: formValues } = await Swal.fire({
        title,
        html:
          '<input id="swal-input1" class="swal2-input" type="email" v-model="creds.email" placeholder="email" />' +
          '<input  id="swal-input2" class="swal2-input" type="password" v-model="creds.password" placeholder="password" />',
        focusConfirm: false,
        preConfirm: () => {
          return [
            // @ts-ignore
            document.getElementById("swal-input1").value,
            // @ts-ignore
            document.getElementById("swal-input2").value
          ];
        }
      });
      // console.log(formValues)
      // debugger
      if (formValues) {
        return { email: formValues[0], password: formValues[1] };
      }
    } catch (error) {
      return false;
    }
  }
  static async registerData(title = "Enter Inputs") {
    try {
      const { value: formValues } = await Swal.fire({
        title,
        html:
          '<input id="swal-input1" class="swal2-input" type="text" v-model="newUser.name" placeholder="name" />' +
          '<input id="swal-input2" class="swal2-input" type="email" v-model="newUser.email" placeholder="email" />' +
          '<input id="swal-input3" class="swal2-input" type="password" v-model="newUser.password" placeholder="password" />',
        focusConfirm: false,
        preConfirm: () => {
          return [
            // @ts-ignore
            document.getElementById("swal-input1").value,
            // @ts-ignore
            document.getElementById("swal-input2").value,
            // @ts-ignore
            document.getElementById("swal-input3").value
          ];
        }
      });
      // console.log(formValues)
      // debugger
      if (formValues) {
        return {
          name: formValues[0],
          email: formValues[1],
          password: formValues[2]
        };
      }
    } catch (error) {
      return false;
    }
  }
  static async confirmAction(text = "You won't be able to revert this!") {
    try {
      let config = {
        title: "Are you sure?",
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      };
      // @ts-ignore
      let result = await Swal.fire(config);
      return result.value;
    } catch (error) {
      return false;
    }
  }
  static async toastError(error) {
    if (error.isAxiosError) {
      error.message = error.response.data;
    }
    // @ts-ignore
    Swal.fire({
      title: "Fill in required field",
      text: error.message || error,
      type: "error",
      timer: 8500,
      showConfirmButton: false,
      position: "top-right",
      toast: true
    });
  }
}
