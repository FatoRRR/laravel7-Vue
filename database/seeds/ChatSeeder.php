<?php

use Illuminate\Database\Seeder;

class ChatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        for ($index=0; $index < 10; $index++) {
            DB::table('chats')->insert(['name' => $faker->name,]);
        }

        for ($index=0; $index < 25; $index++) {
            DB::table('chat_participants')->insert([
                'user_id' => rand(1, 50),
                'chat_id' => rand(1, 10),
            ]);
        }

        for ($index=0; $index < 250; $index++) {
            DB::table('chat_messages')->insert([
                'message' => $faker->text,
                'chat_participant_id' => rand(1, 25),
            ]);
        }
    }
}
