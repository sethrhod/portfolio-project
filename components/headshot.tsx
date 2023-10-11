import Image from 'next/image'

export default function Headshot({style}) {
  return (
    <div className={style}>
      <Image
        src="/images/Seth-Headshot.jpg"
        alt="Seth Rhodes Headshot"
        height={1000}
        width={1000}
        className="w-full h-full object-cover"
      />
    </div>
  )
}