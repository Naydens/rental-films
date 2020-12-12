import React from "react";
import { useForm } from "react-hook-form";

export default class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    debugger;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Пойдут:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Количество гостей:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

// export default function PlaygroundPage() {
//   const { register, handleSubmit, errors } = useForm();

//   console.log(errors);

//   function onSubmit(data) {
//     console.log(data);
//   }

//   return (
//     // <form onSubmit={handleSubmit(onSubmit)}>
//     //   <input name="name" ref={register({
//     //     required: {
//     //       value: true,
//     //       message: "Поле обязательно"
//     //     },
//     //     minLength: {
//     //       value: 3,
//     //       message: 'Имя должно быть не меньше 3х символов'
//     //     }
//     //   })} /><br />
//     //   <div style={{color: 'red'}}>{errors.name && errors.name.message}</div>
//     //   <input name="lastname" ref={register} /><br />
//     //   <button>Send</button>
//     // </form>
//   );
// }
