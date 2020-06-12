import React from 'react';

const  Bio = () => {
        const { info } = this.props;
            return(
                    <tr>
                        <td>{info.name}</td>
                        <td>{info.animal}</td>
                        <td>{info.place}</td>
                        <td>
                            <button icon color="blue" onClick={this.toggleEdit}>
                                <icon name="pencil" />
                            </button>
                            <button icon color="red">
                                <icon name="trash" />
                            </button>
                            <button icon color="green">
                                <icon name="eye" />
                            </button>
                        </td>
                    </tr>
            )
}

export default Bio