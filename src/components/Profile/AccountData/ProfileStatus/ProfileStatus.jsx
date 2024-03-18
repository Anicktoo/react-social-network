import React from 'react';
import s from './ProfileStatus.module.css';
import { classNameFunction } from '../../../../tools/classNameCompiler';
import confirmIcon from '../../../../img/uiActions/confirm.svg';
import Preloader from './../../../common/Preloader/Preloader';

const cName = classNameFunction(s);

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        inputText: this.props.aboutMe,
        isFetching: false,
    }

    openInput = () => {
        this.setState({
            editMode: true,
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
    confirmInputText = () => {
        this.props.updateUserStatus(this.state.inputText);
        this.setState({
            editMode: false,
            isFetching: true,
        });
    }

    componentDidMount() {
        //preloading images
        const img = new Image();
        img.src = confirmIcon;
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.aboutMe !== this.props.aboutMe) {
            this.setState({
                inputText: this.props.aboutMe,
                isFetching: false,
            });
        }
    }

    render() {
        return (
            <div className={cName('about-container')}>
                {this.state.isFetching ?
                    <Preloader content={'#'.repeat(20)} />
                    :
                    this.state.editMode ?
                        <>
                            <input autoFocus onBlur={this.closeInput} onInput={this.updateInputText} onKeyUp={(e) => e.key === 'Enter' && this.confirmInputText()} className={cName('about-input')} type="text" value={this.state.inputText} />
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
