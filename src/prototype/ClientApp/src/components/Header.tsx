import React, { Component } from 'react';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import about from '../about.gif';

interface IProps {

}

interface IState {

}

export default class Header extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {

    }

    render() {
        const {  } = this.props;
        return (
            <div className="w-full h-auto md:w-[65rem] md:h-[12rem] rounded-xl justify-center items-center m-1 p-8 md:p-0 bg-zinc-200 dark:bg-zinc-800 bg-opacity-90">
                <div className="md:p-8 text-center">
                    <div>
                        <div className="text-4xl font-extrabold">
                            welcome
                        </div>
                    </div>
                    <div className="text-3xl font-extrabold">
                        <div className=" text-sky-500 dark:text-sky-400">
                            we're glad you're here
                        </div>
                        <div className="text-zinc-700 dark:text-zinc-500">
                            🎃
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
