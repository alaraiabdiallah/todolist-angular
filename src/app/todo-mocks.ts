import { Todo } from './todo';
import * as moment from 'moment';

let now = moment();
let tomorrow = moment().add(1, "days");
const dateFormat = "YYYY-MM-DD";
export const TODOS: Todo[] = [
    { id: 1, title: "Sarapan", do_at: now.format(dateFormat), done: false },
    { id: 2, title: "Mandi", do_at: now.format(dateFormat), done: false },
    { id: 3, title: "Ngoding", do_at: now.format(dateFormat), done: false },
    { id: 4, title: "Gaming", do_at: now.format(dateFormat), done: false },
    { id: 5, title: "Tidur", do_at: now.format(dateFormat), done: true },
    { id: 6, title: "Sarapan Nasi Kuning", do_at: tomorrow.format(dateFormat), done: false },
    { id: 7, title: "Mandi Susu", do_at: tomorrow.format(dateFormat), done: false },
    { id: 8, title: "Ngoding Angular", do_at: tomorrow.format(dateFormat), done: false },
    { id: 9, title: "Maen gim", do_at: tomorrow.format(dateFormat), done: false },
    { id: 10, title: "Tidur Lagi", do_at: tomorrow.format(dateFormat), done: false },
]