<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChatParticipant extends Model
{
    protected $with = [
        'user'
    ];

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function chats() {
        return $this->belongsToMany(Chat::class);
    }
}
