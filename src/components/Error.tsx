export default function Error({children}: {children: React.ReactNode}) {
  return (
    <div>
      <p className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase text-sm">
        {children}
      </p>
    </div>
  )
}
