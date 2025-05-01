import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>IAAO Test Practice Portal</h1>

      <ul>
        <li>
          <Link href="/iaao-101">Go to IAAO 101 Test</Link>
        </li>
        <li>
          <Link href="/iaao-102">Go to IAAO 102 Test</Link>
        </li>
      </ul>
    </div>
  );
}
