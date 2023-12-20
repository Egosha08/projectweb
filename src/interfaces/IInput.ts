import { ChangeEvent } from "react";

export interface IInput {
			placeholder:string;
			type:string;
			value:string;
			onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}