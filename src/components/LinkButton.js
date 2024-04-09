import Link from "next/link";

export default function LinkButton({name, route}) {
    return (
    <Link href={route} className="rounded-lg text-sm uppercase bg-cyan-500 px-2 py-1 text-white m-4">
        {name}
    </Link>
    )
};
