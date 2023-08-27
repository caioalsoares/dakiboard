'use client'
import { DatePicker } from '@/components/ui/datepicker'

import SelectComponent from '@/components/select'
import styled from 'styled-components'
import Image from 'next/image'

import { Button } from '../ui/button'
import { useState } from 'react'
    const FilterContent = styled.div`
        width: 1300px;
        padding:10px;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        justify-content: right;

        `
    const FilterWrapper = styled.div<{ show?: boolean;  }>`
        display: ${props => props.hidden ? 'flex' : 'none'};
        flex-flow: row wrap;
        align-items: center;
        gap: 10px;

    `
    const FilterElement = styled.div`
        font-size: 11px;
    `
    const FilterClose = styled.div`
    cursor: pointer;
    `
const Filters = () => {

    const [showFilters, setShowFilters] = useState(true)

    return(<FilterContent>
    <FilterWrapper hidden={!showFilters}><Button onClick={() => setShowFilters(true)}>Filtros</Button></FilterWrapper>

    <FilterWrapper hidden={showFilters}>
        <FilterElement >
           <SelectComponent placeholder='City'/>
        </FilterElement>
        <FilterElement>
            <SelectComponent placeholder='Brand'/>
        </FilterElement>
        <FilterElement>
            <SelectComponent placeholder='Currency'/>
        </FilterElement>
        <FilterElement>
            <SelectComponent placeholder='Product'/>
        </FilterElement>
        <FilterElement>
            <SelectComponent placeholder='Barcode'/>
        </FilterElement>
        <FilterElement>
             <DatePicker/>
        </FilterElement>
        <FilterClose onClick={() => setShowFilters(false)}>
            <Image src='xmark.svg' width={20} height={20} alt='close'/>
        </FilterClose>
    </FilterWrapper>
    </FilterContent>
    )
}

export default Filters