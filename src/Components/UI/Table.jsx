import { Typography, Button } from "../index";
import {cn} from '../../lib/utils'
export default function Table({
  title = "",
  columns = ["Service", "Focus", "Description", "Main technologies"],
  rows = [],
  mode = 'dark'
}) {
  return (
    <section className="w-full h-full">
      {/* VERSION DESKTOP - Table */}
      <div className=" flex-col gap-5 h-full hidden md:flex scroll-horizontal-allowed">
        {/* Header sticky - Siempre visible al scrollear */}
        <div className={`sticky top-[100px] z-10 rounded-md bg-background-primary p-3 gap-4 grid grid-cols-4`}>
          {columns.map((c, i) => (
            <Typography
              key={c + i}
              children={c}
              variant="subtitle-lg"
              className="text-text-primary"
            />
          ))}
        </div>

        {/* Rows - Contenedor con scroll */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-4 pb-4">
            {rows.map((r, rowIndex) => (
              <div
                key={rowIndex}
                className={`rounded-md p-3 gap-4 grid grid-cols-4  md:grid`}
              >
                {r.map((c, colIndex) => (
                  <div key={`${rowIndex}-${colIndex}`} className="flex">
                    {Array.isArray(c.children) ? (
                      <ul className="flex flex-col list-disc pl-4">
                        {c.children.map((item, itemIndex) => (
                          <li key={`${rowIndex}-${colIndex}-${itemIndex}`}>
                            <Typography
                              children={` ${item}`}
                              variant={c.variant}
                            />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <Typography
                        children={c.children}
                        variant={c.variant}
                        className="whitespace-pre-line"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VERSION MOBILE - Cards */}
      <div className="flex flex-col gap-5 h-full md:hidden">
        {rows.map((r, rowIndex) => (
          <div
            key={rowIndex}
            className="relative flex flex-col gap-4 rounded-md p-[0.8px]"
            style={{
              backgroundImage: 'linear-gradient(90deg, #7513FF, #4348F3, #0093CE)'
            }}
          >
            {/* Fondo interior */}
            <div className="rounded-md bg-background-inverse-hover py-6 px-3">
              {r.map((c, colIndex) => (
                <div key={`${rowIndex}-${colIndex}`} className="flex">
                  {Array.isArray(c.children) ? (
                    <ul className="flex flex-col list-disc pl-4">
                      {c.children.map((item, itemIndex) => (
                        <li key={`${rowIndex}-${colIndex}-${itemIndex}`}>
                          <Typography
                            children={` ${item}`}
                            variant={c.variant}
                          />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Typography
                      children={c.children}
                      variant={c.variant}
                      className="whitespace-pre-line"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}