// import React from 'react';
// class DisplayQuestion extends React.Component {
//     render() {
//         return (
//             <div>
//                 How are you, {this.props.username} ?
//             </div>
//         );
//     }
// }

// export default DisplayQuestion;

import React from 'react';
import hoc from './hoc';
class DisplayQuestion extends React.Component {
    render() {
        return (
            <div>
                How are you, {this.props.username} ?
            </div>
        );
    }
}

export default hoc(DisplayQuestion);
