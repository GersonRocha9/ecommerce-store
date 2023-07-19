export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; {year} Rocha Madrid Sports - Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
