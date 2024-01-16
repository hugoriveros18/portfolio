import { menuItems } from "../utils/menuItems"
import ActionButton from "./ActionButton"
import { MenuItemDekstop } from "./MenuItem"

export default function MenuDesktop() {
    return (
        <div className="flex md:hidden gap-3">
          <ul className="flex">
            {
              menuItems.map((item, index) => {
                return (
                  <MenuItemDekstop
                    key={item.sectionNumber}
                    sectionNumber={item.sectionNumber}
                    title={item.title}
                    slug={item.slug}
                    delay={index}
                  />
                )
              })
            }
          </ul>
          <div className="block-fade-in-down block-fade-in-down-4 opacity-0">
            <ActionButton
              text="Resume"
              slug="/files/cv-hugo-riveros.pdf"
              variation="secondary"
              openNewTab
            />
          </div>
        </div>
    )
}
