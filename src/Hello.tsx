/** @format */

import React, {SyntheticEvent} from "react";

export interface Props {
     name: String;
     enthusiasmLevel?: number;
}

export interface State {
     currentEnthusiasm: number;
}

// function Hello({name, enthusiasmLevel = 1}: Props) {

//      if (enthusiasmLevel <= 0){
//           throw new Error("You can be a little more enthusiastic. :D")
//      }
//   return (
//        <div className="hello">
//             <div className="greeting">
//                  Hello {name + getExclamationMarks(enthusiasmLevel)}
//             </div>
//        </div>
//   );
// }

class Hello extends React.Component<Props, State> {
     state = { currentEnthusiasm: this.props.enthusiasmLevel || 1 };

     onIncrement = (e: SyntheticEvent) => {
          console.log(e);
          this.updateEnthusiasm(1);
     };
     onDecrement = (e: SyntheticEvent) => {
          console.log(e);
          this.updateEnthusiasm(-1);
     };
     render() {
          const { name } = this.props;

          if (this.state.currentEnthusiasm <= 0) {
               throw new Error("You can be a little more enthusiastic. :D");
          }
          return (
               <div className="hello">
                    <div className="greeting">
                         Hello{" "}
                         {name +
                              getExclamationMarks(this.state.currentEnthusiasm)}
                    </div>

                    <button onClick={this.onDecrement}>-</button>
                    <button onClick={this.onIncrement}>+</button>
               </div>
          );
     }

     updateEnthusiasm(change: number) {
          this.setState((currentState) => {
               return {
                    currentEnthusiasm: currentState.currentEnthusiasm + change,
               };
          });
     }
}

export default Hello;

function getExclamationMarks(numChars: number) {
     return Array(numChars + 1).join("!");
}
