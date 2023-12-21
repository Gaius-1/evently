import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38} />
        </Link>

        <p>{`© ${currentYear} Evently. All Rights Reserved.`}</p>
      </div>
    </footer>
  )
}

export default Footer