import React, { useState } from 'react'
import { FaThList } from 'react-icons/fa'
import { Icon } from '@chakra-ui/icons'
import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import Link from 'next/link'
import { useGlobalContext } from '../../context/GlobalContext'

function Categories({ klasa }) {
    const { openSubMenu, closeSubMenu, updateSubCategory, subCategory } =
        useGlobalContext()

    return (
        <div
            className={
                klasa === 'mobile'
                    ? 'categories-wrapper mobile'
                    : 'categories-wrapper desktop'
            }
        >
            <div className="categories-header">
                <Icon as={FaThList} />
                <h3>Kategorije</h3>
            </div>
            <div className="categories-body">
                <div className="categories-list">
                    <ul>
                        <div
                            onMouseOver={() => {
                                openSubMenu()
                                updateSubCategory('laptop')
                            }}
                            onMouseLeave={() => {
                                closeSubMenu()
                            }}
                            className="single-category"
                        >
                            <LinkBox className="link-box">
                                <LinkOverlay
                                    className="link-overlay"
                                    href="laptopi"
                                >
                                    <p>Laptopi</p>
                                    <p
                                        className={
                                            subCategory === 'laptop'
                                                ? 'arrow desktop'
                                                : 'hidden'
                                        }
                                    >
                                        {'>'}
                                    </p>
                                </LinkOverlay>
                            </LinkBox>
                        </div>
                        <div
                            onMouseOver={() => {
                                openSubMenu()
                                updateSubCategory('monitor')
                            }}
                            onMouseLeave={() => closeSubMenu()}
                            className="single-category"
                        >
                            <LinkBox className="link-box">
                                <LinkOverlay
                                    className="link-overlay"
                                    href="monitori"
                                >
                                    <p>Monitori</p>
                                    <p
                                        className={
                                            subCategory === 'monitor'
                                                ? 'arrow desktop'
                                                : 'hidden'
                                        }
                                    >
                                        {'>'}
                                    </p>
                                </LinkOverlay>
                            </LinkBox>
                        </div>
                        <div
                            onMouseOver={() => {
                                openSubMenu()
                                updateSubCategory('computer')
                            }}
                            onMouseLeave={() => closeSubMenu()}
                            className="single-category"
                        >
                            <LinkBox className="link-box">
                                <LinkOverlay
                                    className="link-overlay"
                                    href="racunari"
                                >
                                    <p>Računari</p>
                                    <p
                                        className={
                                            subCategory === 'computer'
                                                ? 'arrow desktop'
                                                : 'hidden'
                                        }
                                    >
                                        {'>'}
                                    </p>
                                </LinkOverlay>
                            </LinkBox>
                        </div>
                        <div
                            onMouseOver={() => {
                                openSubMenu()
                                updateSubCategory('television')
                            }}
                            onMouseLeave={() => closeSubMenu()}
                            className="single-category"
                        >
                            <LinkBox className="link-box">
                                <LinkOverlay
                                    className="link-overlay"
                                    href="televizori"
                                >
                                    <p>Televizori</p>
                                    <p
                                        className={
                                            subCategory === 'television'
                                                ? 'arrow desktop'
                                                : 'hidden'
                                        }
                                    >
                                        {'>'}
                                    </p>
                                </LinkOverlay>
                            </LinkBox>
                        </div>
                        <div
                            onMouseOver={() => {
                                openSubMenu()
                                updateSubCategory('phone')
                            }}
                            onMouseLeave={() => closeSubMenu()}
                            className="single-category"
                        >
                            <LinkBox className="link-box">
                                <LinkOverlay
                                    className="link-overlay"
                                    href="telefoni"
                                >
                                    <p>Telefoni</p>
                                    <p
                                        className={
                                            subCategory === 'phone'
                                                ? 'arrow desktop'
                                                : 'hidden'
                                        }
                                    >
                                        {'>'}
                                    </p>
                                </LinkOverlay>
                            </LinkBox>
                        </div>
                        <div
                            onMouseOver={() => {
                                openSubMenu()
                                updateSubCategory('components')
                            }}
                            onMouseLeave={() => closeSubMenu()}
                            className="single-category"
                        >
                            <LinkBox className="link-box">
                                <LinkOverlay
                                    className="link-overlay"
                                    href="komponente"
                                >
                                    <p>Računarske komponente</p>
                                    <p
                                        className={
                                            subCategory === 'components'
                                                ? 'arrow desktop'
                                                : 'hidden'
                                        }
                                    >
                                        {'>'}
                                    </p>
                                </LinkOverlay>
                            </LinkBox>
                        </div>
                        <div
                            onMouseOver={() => {
                                openSubMenu()
                                updateSubCategory('perifery')
                            }}
                            onMouseLeave={() => closeSubMenu()}
                            className="single-category"
                        >
                            <LinkBox className="link-box">
                                <LinkOverlay
                                    className="link-overlay"
                                    href="periferija"
                                >
                                    <p>Računarska periferija</p>
                                    <p
                                        className={
                                            subCategory === 'perifery'
                                                ? 'arrow desktop'
                                                : 'hidden'
                                        }
                                    >
                                        {'>'}
                                    </p>
                                </LinkOverlay>
                            </LinkBox>
                        </div>
                        <div
                            onMouseOver={() => {
                                openSubMenu()
                                updateSubCategory('mining')
                            }}
                            onMouseLeave={() => closeSubMenu()}
                            className="single-category"
                        >
                            <LinkBox className="link-box">
                                <LinkOverlay
                                    className="link-overlay"
                                    href="mining"
                                >
                                    <p>Mining</p>
                                    <p
                                        className={
                                            subCategory === 'mining'
                                                ? 'arrow desktop'
                                                : 'hidden'
                                        }
                                    >
                                        {'>'}
                                    </p>
                                </LinkOverlay>
                            </LinkBox>
                        </div>
                    </ul>
                </div>
                <div className="action-link">
                    <LinkBox>
                        <LinkOverlay href="akcija">
                            <h3>AKCIJA</h3>
                        </LinkOverlay>
                    </LinkBox>
                </div>
            </div>
        </div>
    )
}

export default Categories
