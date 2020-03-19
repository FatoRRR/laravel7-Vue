<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        DB::table('users')
            ->insert([
                'username' => 'fatorbeatz',
                'email' => 'fatrrag@gmail.com',
                'password' => Hash::make('krassesPW'),
        ]);

        for ($index=0; $index < 50; $index++) {
            DB::table('users')
                ->insert([
                    'username' => $faker->userName,
                    'email' => $faker->email,
                    'password' => Hash::make('krassesPW'),
            ]);
        }
    }
}
