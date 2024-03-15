import React from 'react';
import s from './ProfileStatus.module.css';
import { classNameFunction } from '../../../../tools/classNameCompiler';
import sendIcon from '../../../../img/uiActions/edit.svg'

const cName = classNameFunction(s);

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    openInput = function () {
        this.setState({
            editMode: true
        });
    }
    closeInput = function () {
        this.setState({
            editMode: false
        });
    }

    render() {

        return (
            <div className={cName('about-container')}>
                {this.state.editMode ?
                    <>
                        <input autoFocus={true} onBlur={this.closeInput.bind(this)} className={cName('about-input')} type="text" value={this.props.aboutMe} />
                    </>
                    :
                    <>
                        <span onClick={this.openInput.bind(this)} className={cName('about')}>{this.props.aboutMe}</span>
                    </>
                }
            </div>
        );
    }
}

export default ProfileStatus;
