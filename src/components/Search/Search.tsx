import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Tabs from '../ui/Tabs/Tabs';
import { useState } from 'react';
import { tabs } from './constants';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Search = () => {
    const [value, setValue] = useState('projects');
    const onClick = (value: string) => setValue(value);

    return (
        <div className="h-96 flex items-center justify-center">
            <div className='w-full bg-primary p-6 text-body-m justify-center font-regular rounded-lg gap-3 space-y-3'>
                <h2 className='text-center text-primary-content'>
                    Descubre nuestras últimas obras y proyectos destacados.
                </h2>
                <Tabs
                    id='searvh-tabs'
                    tabs={tabs}
                    selected={value}
                    onClick={onClick}
                />
                <form>
                    <div className='flex gap-3 w-full'>
                        {value === 'buy' && (
                            <select title="Seleccione" className='text-secondary'>
                                <option value="2">
                                    Casa
                                </option>
                                <option value="1">
                                    Apartamento
                                </option>
                                <option value="9">
                                    Proyecto
                                </option>
                                <option value="5">
                                    Local
                                </option>
                                <option value="6">
                                    Oficina
                                </option>
                                <option value="4">
                                    Terreno
                                </option>
                            </select>
                        )}
                        {value === 'projects' && (
                            <select title="Seleccione">
                                <option value="2">
                                    Casa
                                </option>
                                <option value="1">
                                    Apartamento
                                </option>
                                <option value="6">
                                    Oficina
                                </option>
                            </select>
                        )}

                        <div className="flex w-full items-center space-x-2 bg-white rounded-lg justify-between">
                            <Input type="search" placeholder="Buscar" className='border-0' />
                            <Button type="submit" className='bg-pistachio rounded-full'>
                                <MagnifyingGlassIcon className="h-5 w-5 " />
                            </Button>
                        </div>

                    </div>
                </form>
            </div>
        </div >
    );
}

export default Search;
