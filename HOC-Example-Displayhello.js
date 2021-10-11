// import React from 'react';
// class DisplayHello extends React.Component {
//     render() {
//         return (
//             <div>
//                 Hello {this.props.username} !
//             </div>
//         );
//     }
// }

// export default DisplayHello;

import React from 'react';
import hoc from './hoc';
class DisplayHello extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.username} !
            </div>
        );
    }
}

export default hoc(DisplayHello);
