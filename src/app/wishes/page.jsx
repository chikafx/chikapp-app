"use client"
import { useContext } from 'react';
import { SidebarContext } from '../providers'
import Image from 'next/image'
import Delete from './Delete';

export default function WishPage() {
    const {movieItem}= useContext(SidebarContext)
  return (
    <div>
        {movieItem.length==0 ?
        (
            <h2>add movie to Watch list</h2>
        )
        :
        (
            
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th className='mr-9'>title</th>
                            <th>epi</th>
                        </tr>
                    </thead>
                
                <tbody>
                {movieItem.map((movie, index)=>(
                    <tr key={index}>
                        <td><Image src={`/mv/${movie.img}`}
                         alt={movie.Title} title={movie.Title} width={'150'} height={'150'}/></td>
                        <td>{movie.Title}</td>
                        <td>{movie.epi}</td>

                        <td>
                            <Delete index={index} title={movie.Title}/>
                        </td>
                    </tr>
                ))}
                </tbody>
                </table>
            </div>
        )
    }
    </div>
  )
}
