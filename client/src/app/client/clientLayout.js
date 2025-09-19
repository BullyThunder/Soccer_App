import Header from "./components/header/Header";
export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
        <div className="bg-main min-h-screen">
          <div className="h-[74px]"></div> 
          {children}
        </div>
      </body>
    </html>
  );
}