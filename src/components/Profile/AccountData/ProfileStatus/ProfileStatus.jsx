import React from 'react';
import s from './ProfileStatus.module.css';
import { classNameFunction } from '../../../../tools/classNameCompiler';
import confirmIcon from '../../../../img/uiActions/confirm.svg';

const cName = classNameFunction(s);

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        inputText: this.props.aboutMe,
    }

    openInput = () => {
        this.setState({
            editMode: true,
            inputText: this.props.aboutMe,
        });
    }
    closeInput = () => {
        this.setState({
            editMode: false,
            inputText: this.props.aboutMe,
        });
    }
    updateInputText = (e) => {
        this.setState({
            inputText: e.target.value,
        });
    }
    confirmInputText = (e) => {
        this.props.updateUserStatus(this.state.inputText);
        this.setState({
            editMode: false,
        });
    }

    render() {
        console.log('render', this.state.editMode, this.state.inputText, this.props.aboutMe)
        return (
            <div className={cName('about-container')}>
                {this.state.editMode ?
                    <>
                        <input autoFocus onBlur={this.closeInput} onInput={this.updateInputText} className={cName('about-input')} type="text" value={this.state.inputText} />
                        <button onMouseDown={(e) => { e.preventDefault() }} onClick={this.confirmInputText} className={cName('confirm')}><img src={confirmIcon} alt="confirm" /></button>
                    </>
                    :
                    <>
                        <span onClick={this.openInput} className={cName('about')}>{this.props.aboutMe}</span>
                    </>
                }
            </div>
        );
    }
}

export default ProfileStatus;
