import Beranda from "./Beranda";
import Mysql from "./Mysql/page";
import { redirect } from 'next/navigation';

export default function Home() {
        redirect("/Mysql/intro/intro");

}
