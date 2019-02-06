import React from 'react';
import TextField from '@material-ui/core/TextField';

class Input extends React.Component{
    state = {
        multiline: '',

    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value})
   }

    render(){
        return(
            <TextField
            id="outlined-multiline-flexible"
            label="Roast or Boast"
            multiline
            rowsMax="4"
            value={this.state.multiline}
            onChange={this.handleChange('multiline')}
            margin="normal"
            // helperText="hello"
            variant="outlined"
          />
        )
    }
}

export default Input;