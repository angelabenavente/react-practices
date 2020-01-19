import React from 'react';
import Form381 from './381Form';
import Tarjeta381 from './381Tarjeta';
import FileReader381 from './381FileReader';
import Data from './data.json';

const MAX_GENDERS = 3;

class App381 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          description: '',
          numberInput: '',
          pairs: 'false',
          idioma: '',
          age: 'Para todos los públicos',
          genders: [],
          image: '',
          data: Data
        }
        this.inputFileChanged = this.inputFileChanged.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
      }

      inputFileChanged(imageInput) {
        if (window.FileReader) {
          const file = imageInput.files[0];
          const reader = new FileReader();

          reader.onload = (event) => {
            this.setState({
              image: event.target.result
            });
          }

          reader.readAsDataURL(file);
        }
        else {
          alert('Sorry, your browser doesn\'t support for preview');
        }
      }

      addGender(gender, event) {
        const genders = [...this.state.genders];

        if (genders.length < MAX_GENDERS) {
          genders.push(gender);

          this.setState({ genders }); // genders: genders
        } else {
          event.target.checked = false;
        }
      }

      removeGender(gender) {
        const genders = [...this.state.genders];

        const index = genders.indexOf(gender);
        genders.splice(index, 1);

        this.setState({ genders }); // genders: genders
      }

      onChangeHandler(event) {
        const stateName = event.target.name;
        const newValue = event.target.value;
        console.log(stateName);
        console.log(newValue);
        if (stateName === 'genders') {
          const isAdding = event.target.checked;

          if (isAdding) {
            this.addGender(newValue, event);
          } else {
            this.removeGender(newValue);
          }
        } else {
          this.setState({
            [stateName]: newValue // `${stateName}`: newValue
          });
        }
      }

    render() {
      const {
        name,
        description,
        numberInput,
        pairs,
        idioma,
        age,
        genders,
        image,
        data
      } = this.state;
        return (
            <div>
              <Tarjeta381 name={name} description={description} idioma={idioma} age={age} genders={genders} image={image} numberInput={numberInput} pairs={pairs}/>
               {/* data={this.state.data} */}
               <Form381 onChangeHandler={this.onChangeHandler} data={data}/>
              <FileReader381 inputFileChanged={this.inputFileChanged} image={image} />
            </div>
        );
      }
    }
export default App381;
