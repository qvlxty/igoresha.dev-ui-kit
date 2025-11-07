import React from 'react'
import styled from 'styled-components'
import { themeVar } from '../theming'
import { onSmWidth } from '../const'

type Item<T> = {
    value: T,
    text: string,
    icon?: React.ReactNode
}

type Props<T> = {
    options: Item<T>[],
    placeholder?: string,
    selected?: T,
    headerIcon?: React.ReactNode
    onOptionChange: (optionValue: T) => void
}

export const Dropdown = <T extends number | string | null>(
    { options, onOptionChange, selected, placeholder = 'Empty', headerIcon }: Props<T>
) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleList = () => setIsOpen(!isOpen)
    const selectedText = options.find((cat) => cat.value === selected)?.text

    const onOptionClicked = (item: Item<T>) => {
        onOptionChange(item.value)
        toggleList()
    }
    const ref = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        const handleClickOutside = (e: PointerEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                if (isOpen) {
                    setIsOpen(false)
                }
            }
        }
        document.addEventListener('click',handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isOpen])

    return (
        <Container ref={ref}>
            <Header onClick={toggleList}>
                <div>
                    {selectedText && (
                        <div>{selectedText}</div>
                    )}
                    {!selectedText && (
                        <div>{placeholder}</div>
                    )}
                </div>
                {headerIcon}
            </Header>
            {isOpen && (
                <Wrapper>
                    <ListContainer>
                        <List>
                            {options.map((item) => (
                                <ListItem
                                    key={item.value}
                                    onClick={() => onOptionClicked(item)}
                                >
                                    <div>
                                        {item.text}
                                    </div>
                                    <div>
                                        {item.icon}
                                    </div>
                                </ListItem>
                            ))}
                        </List>
                    </ListContainer>
                </Wrapper>
            )}
        </Container>
    )
}

const Container = styled.div`
    width: 240px;
    ${onSmWidth} {
        width: 100%;
    }
`

const Header = styled.div`
    border-radius: 4px;
    border: 1px solid ${themeVar('default800')};
    padding: 14px;
    font-weight: 400;
    color: ${themeVar('default300')};   
    box-sizing: border-box;
    max-height: 40px;
    background: ${themeVar('contentBg')};
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        border: 1px solid ${themeVar('default600')};
    }
`

const Wrapper = styled.div`
    position: relative;
    z-index: 1;

`

const ListContainer = styled.div`
    position: absolute;
    height: 0;
    border-radius: 4px;
    margin-top: 0px;
    width: 240px;
    right:0;
`

const List = styled.ul`
    padding: 0;
    margin: 0;
    margin-top: -4px;
    background: ${themeVar('contentBg')};
    
    border: 1px solid ${themeVar('default700')};
    border-radius: 4px;
    color: ${themeVar('accent500')};

    box-shadow: 0px 12px 24px 2px #11111111;
    box-sizing: border-box;

    max-height: 80vh;
    overflow-y: auto;
`

const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
    padding-top: 12px;
    color: ${themeVar('default400')};
    animation: fadeout 0.5s;
    border-radius: 4px;
    user-select: none;
    &:hover {
        color: ${themeVar('default300')};
        cursor: pointer; 
    }
`